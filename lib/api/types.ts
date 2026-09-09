/** Tipos que espejan los modelos de APIReto (Flask + MySQL). */

/** Corresponde a models/VideoSimulacion.py → to_dict(). */
export type VideoSimulacion = {
  Id: number
  SimulacionId: number
  /** Ruta del archivo de video grabado desde Unity. */
  Ruta: string
  /** Fecha en formato serializado por la API. */
  FechaCreacion: string
}

/** Cuerpo de POST /GuardarVideo. */
export type GuardarVideoBody = {
  SimulacionId: number
  Ruta: string
}

/**
 * Resultado de toda llamada a la API.
 *
 * Nunca se lanza una excepción hacia los componentes: el fallo es un valor,
 * de modo que la UI siempre tiene algo que renderizar y el layout no se rompe.
 */
export type ApiResult<T> =
  | { ok: true; data: T; source: 'api' }
  | { ok: false; error: ApiErrorKind; data: T; source: 'fallback' }

export type ApiErrorKind =
  | 'timeout'
  | 'network'
  | 'http'
  | 'parse'
  | 'disabled'
