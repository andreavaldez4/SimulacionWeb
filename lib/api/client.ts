import { FALLBACK_VIDEOS } from "./fallback";
import type {
  ApiErrorKind,
  ApiResult,
  GuardarVideoBody,
  VideoSimulacion,
} from "./types";

/**
 * Cliente de APIReto.
 *
 * Reglas de esta capa:
 *  - Toda petición aborta a los 3 s (AbortController). El sitio se abre desde
 *    el WiFi de invitados de una oficina: una petición colgada no puede
 *    bloquear nada de lo que se presenta.
 *  - Ninguna función lanza. El fallo se devuelve como valor junto con datos de
 *    respaldo, así que quien la consuma siempre tiene algo que renderizar.
 *  - Sin base URL configurada, la capa queda inerte y responde 'disabled'.
 *
 * Todavía no está conectada a ninguna sección: es infraestructura lista para
 * usarse cuando la API sea alcanzable desde el dispositivo del asistente.
 */

const TIMEOUT_MS = 3000;

/** Ej. https://192.168.0.10:5001 — sin barra final. */
const BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") ?? "";

async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<{ ok: true; data: T } | { ok: false; error: ApiErrorKind }> {
  if (!BASE_URL) return { ok: false, error: "disabled" };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...init,
      signal: controller.signal,
      cache: "no-store",
      headers: { "Content-Type": "application/json", ...init?.headers },
    });

    if (!res.ok) return { ok: false, error: "http" };

    try {
      return { ok: true, data: (await res.json()) as T };
    } catch {
      return { ok: false, error: "parse" };
    }
  } catch (err) {
    // AbortError es el timeout; cualquier otra cosa es fallo de red o de TLS
    // (el servidor de desarrollo usa un certificado autofirmado).
    const aborted = err instanceof DOMException && err.name === "AbortError";
    return { ok: false, error: aborted ? "timeout" : "network" };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Convierte la `Ruta` que devuelve la API en algo que el `<video>` pueda cargar.
 *
 * La API guarda rutas relativas a sí misma ('/videos/x.mp4'), así que hay que
 * anteponerle su origen. Se respeta tal cual una URL absoluta o un archivo
 * servido desde /public, para que el respaldo local siga funcionando sin red.
 */
export function urlDeVideo(ruta: string): string {
  if (!ruta) return "";

  // Ya viene absoluta: se respeta tal cual.
  if (/^https?:\/\//i.test(ruta)) return ruta;

  // Sin API configurada solo puede ser un archivo de /public.
  if (!BASE_URL) return ruta;

  // La API guarda en Ruta el nombre del archivo pelón (lo que devuelve
  // secure_filename), no una ruta, y lo sirve bajo /Videos. Una Ruta que ya
  // trae barra inicial se toma como ruta completa dentro de la API, para que
  // esto siga sirviendo si algún día se guarda con carpeta incluida.
  const camino = ruta.startsWith("/") ? ruta : `/Videos/${ruta}`;
  return `${BASE_URL}${camino}`;
}

/**
 * GET /ObtenerVideo/<Id> — todas las grabaciones de una simulación.
 *
 * El identificador es el INT de `Simulaciones.Id`, no el texto que pone Unity:
 * la API indexa por la llave autoincremental. Devuelve una lista porque una
 * simulación puede tener más de un video.
 *
 * La sección de simulaciones no la usa (obtenerUltimasSimulaciones ya trae el
 * video de cada corrida); queda para cuando se necesite una sola corrida.
 */
export async function obtenerVideos(
  simulacionId: number,
): Promise<ApiResult<VideoSimulacion[]>> {
  const res = await request<VideoSimulacion[]>(
    `/ObtenerVideo/${simulacionId}`,
  );

  if (res.ok && Array.isArray(res.data) && res.data.length > 0) {
    return { ok: true, data: res.data, source: "api" };
  }

  return {
    ok: false,
    error: res.ok ? "parse" : res.error,
    data: FALLBACK_VIDEOS,
    source: "fallback",
  };
}

/**
 * Las últimas corridas, cada una con su grabación.
 *
 * Se arma con dos llamadas por diseño, no por gusto:
 *
 *  1. GET /ObtenerUltimasSimulaciones?cantidad=N devuelve Id, SimulacionId y
 *     fecha. El procedure hace LEFT JOIN contra Videos, así que una simulación
 *     con varios videos aparece repetida una vez por video: hay que quitar los
 *     duplicados por Id antes de contar cuántas corridas son. Por eso se piden
 *     de más y se recorta después.
 *  2. GET /ObtenerVideo/<Id> por cada una, para quedarse con la grabación más
 *     reciente de esa corrida.
 *
 * Todo va en paralelo por corrida, y una parte que falle no tumba a las demás:
 * sin video se muestra el aviso, pero la corrida sigue apareciendo.
 */
export async function obtenerUltimasSimulaciones(
  cantidad = 3,
): Promise<ApiResult<VideoSimulacion[]>> {
  // Se piden de más porque el LEFT JOIN repite una corrida por cada video que
  // tenga: con `cantidad` pelón, una sola corrida con 3 videos llenaría la lista.
  const res = await request<Record<string, unknown>[]>(
    `/ObtenerUltimasSimulaciones?cantidad=${cantidad * 8}`,
  );

  if (!res.ok || !Array.isArray(res.data)) {
    return {
      ok: false,
      error: res.ok ? "parse" : res.error,
      data: [],
      source: "fallback",
    };
  }

  // Dedup por Id conservando el orden que ya trae (Id DESC = más nueva primero).
  const vistas = new Set<number>();
  const corridas: { Id: number; SimulacionId: string; Fecha: string }[] = [];

  for (const fila of res.data) {
    const id = Number(fila.Id);
    if (!Number.isFinite(id) || vistas.has(id)) continue;

    vistas.add(id);
    corridas.push({
      Id: id,
      SimulacionId: String(fila.SimulacionId ?? ""),
      Fecha: String(fila.FechaCreacion ?? ""),
    });

    if (corridas.length === cantidad) break;
  }

  if (corridas.length === 0) {
    return { ok: true, data: [], source: "api" };
  }

  const data = await Promise.all(
    corridas.map(async (corrida) => {
      const videos = await request<Record<string, unknown>[]>(
        `/ObtenerVideo/${corrida.Id}`,
      );

      // Una corrida puede tener varios videos: se muestra el más reciente.
      const grabaciones =
        videos.ok && Array.isArray(videos.data) ? videos.data : [];
      const ultimo = grabaciones[grabaciones.length - 1];

      return {
        Id: corrida.Id,
        SimulacionId: corrida.SimulacionId,
        Ruta: ultimo ? String(ultimo.Ruta ?? "") : "",
        FechaVideo: ultimo
          ? String(ultimo.FechaCreacion ?? corrida.Fecha)
          : corrida.Fecha,
      };
    }),
  );

  return { ok: true, data, source: "api" };
}

/** POST /GuardarVideo — responde 202 en la API cuando se guarda. */
export async function guardarVideo(
  body: GuardarVideoBody,
): Promise<ApiResult<boolean>> {
  const res = await request<unknown>("/GuardarVideo", {
    method: "POST",
    body: JSON.stringify(body),
  });

  return res.ok
    ? { ok: true, data: true, source: "api" }
    : { ok: false, error: res.error, data: false, source: "fallback" };
}

/** GET / — health check. Útil para decidir si vale la pena intentar más. */
export async function apiDisponible(): Promise<boolean> {
  const res = await request<{ mensaje: string }>("/");
  return res.ok;
}
