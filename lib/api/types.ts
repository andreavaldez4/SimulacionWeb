/** Tipos que espejan los modelos de APIReto (Flask + MySQL). */

/**
 * Ojo con los dos identificadores, porque la base los mezcla:
 *
 *  - `Simulaciones.Id` es un INT autoincremental. Es el que guarda
 *    `Videos.SimulacionId` como llave foránea, y el que pide el procedure
 *    `InsertarVideoSimulacion`.
 *  - `Simulaciones.SimulacionId` es un VARCHAR(100) que pone quien corre la
 *    simulación. Es el que pide `ObtenerVideoPorSimulacion`.
 *
 * O sea: se consulta por texto y se inserta por número. Unity solo conoce el
 * de texto; la API traduce con `ObtenerOCrearSimulacion` al subir el archivo.
 */

/**
 * Una corrida grabada: el video más los identificadores con los que la API la
 * indexa. Es lo que devuelve `obtenerUltimasSimulaciones`.
 */
export type VideoSimulacion = {
  /**
   * INT autoincremental de `Simulaciones.Id`. Es la llave con la que se piden
   * video y detalles: la API indexa todo por este número.
   */
  Id: number
  /** VARCHAR de Simulaciones.SimulacionId: el texto que pone Unity. */
  SimulacionId: string
  /** Nombre del archivo servido por la API bajo /Videos. */
  Ruta: string
  /** Fecha del video, en el formato serializado por la API. */
  FechaVideo: string
}

/** Cuerpo de POST /GuardarVideo. Solo registra una ruta ya existente. */
export type GuardarVideoBody = {
  /** INT interno, tal como lo espera InsertarVideoSimulacion. */
  SimulacionId: number
  Ruta: string
}

/** Respuesta de POST /SubirVideo, que sí recibe el archivo. */
export type SubirVideoRespuesta = {
  status: 'success' | 'error'
  message: string
  SimulacionId?: string
  Id?: number
  Ruta?: string
  Bytes?: number
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
