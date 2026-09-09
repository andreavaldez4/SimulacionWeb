import { FALLBACK_VIDEOS } from './fallback'
import type { ApiErrorKind, ApiResult, GuardarVideoBody, VideoSimulacion } from './types'

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

const TIMEOUT_MS = 3000

/** Ej. https://192.168.0.10:5001 — sin barra final. */
const BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, '') ?? ''

async function request<T>(path: string, init?: RequestInit): Promise<
  { ok: true; data: T } | { ok: false; error: ApiErrorKind }
> {
  if (!BASE_URL) return { ok: false, error: 'disabled' }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...init,
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json', ...init?.headers },
    })

    if (!res.ok) return { ok: false, error: 'http' }

    try {
      return { ok: true, data: (await res.json()) as T }
    } catch {
      return { ok: false, error: 'parse' }
    }
  } catch (err) {
    // AbortError es el timeout; cualquier otra cosa es fallo de red o de TLS
    // (el servidor de desarrollo usa un certificado autofirmado).
    const aborted = err instanceof DOMException && err.name === 'AbortError'
    return { ok: false, error: aborted ? 'timeout' : 'network' }
  } finally {
    clearTimeout(timer)
  }
}

/** GET /ObtenerVideo/<SimulacionId> — degrada al video local. */
export async function obtenerVideos(simulacionId: number): Promise<ApiResult<VideoSimulacion[]>> {
  const res = await request<VideoSimulacion[]>(`/ObtenerVideo/${simulacionId}`)

  if (res.ok && Array.isArray(res.data) && res.data.length > 0) {
    return { ok: true, data: res.data, source: 'api' }
  }

  return {
    ok: false,
    error: res.ok ? 'parse' : res.error,
    data: FALLBACK_VIDEOS,
    source: 'fallback',
  }
}

/** POST /GuardarVideo — responde 202 en la API cuando se guarda. */
export async function guardarVideo(body: GuardarVideoBody): Promise<ApiResult<boolean>> {
  const res = await request<unknown>('/GuardarVideo', {
    method: 'POST',
    body: JSON.stringify(body),
  })

  return res.ok
    ? { ok: true, data: true, source: 'api' }
    : { ok: false, error: res.error, data: false, source: 'fallback' }
}

/** GET / — health check. Útil para decidir si vale la pena intentar más. */
export async function apiDisponible(): Promise<boolean> {
  const res = await request<{ mensaje: string }>('/')
  return res.ok
}
