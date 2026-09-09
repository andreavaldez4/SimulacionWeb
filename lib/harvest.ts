/**
 * Fórmulas del recorrido de cosecha.
 *
 * Estas funciones son puras y son la única definición de las cuentas en el
 * sitio: los componentes las importan, nunca las reimplementan.
 */

export type CampoParams = {
  /** Ancho del campo en metros (eje perpendicular a los carriles). */
  ancho: number
  /** Largo del campo en metros (eje a lo largo de cada carril). */
  largo: number
  /** Ancho de corte del cabezal en metros. */
  anchoCorte: number
  /** Velocidad de avance en km/h. */
  velocidad: number
}

export type CampoResultado = {
  carriles: number
  distanciaKm: number
  tiempoH: number
  areaHa: number
}

/**
 * Número de carriles paralelos necesarios para cubrir el ancho del campo.
 * Se redondea hacia arriba: un carril parcial sigue siendo una pasada completa.
 */
export function calcularCarriles(ancho: number, anchoCorte: number): number {
  if (anchoCorte <= 0) return 0
  return Math.ceil(ancho / anchoCorte)
}

/**
 * Distancia total recorrida, en kilómetros.
 *
 * Suma dos términos:
 *  - los tramos rectos: un largo completo por carril;
 *  - los giros de cabecera: cada giro de 180° describe un semicírculo de
 *    diámetro igual al ancho de corte, es decir `anchoCorte * PI / 2`.
 */
export function calcularDistanciaKm(carriles: number, largo: number, anchoCorte: number): number {
  return (carriles * largo + carriles * anchoCorte * (Math.PI / 2)) / 1000
}

/** Tiempo estimado en horas a velocidad constante. */
export function calcularTiempoH(distanciaKm: number, velocidad: number): number {
  if (velocidad <= 0) return 0
  return distanciaKm / velocidad
}

/** Área del campo en hectáreas (1 ha = 10,000 m²). */
export function calcularAreaHa(ancho: number, largo: number): number {
  return (ancho * largo) / 10000
}

/** Calcula el conjunto completo de salidas a partir de los parámetros del campo. */
export function calcularCampo({ ancho, largo, anchoCorte, velocidad }: CampoParams): CampoResultado {
  const carriles = calcularCarriles(ancho, anchoCorte)
  const distanciaKm = calcularDistanciaKm(carriles, largo, anchoCorte)

  return {
    carriles,
    distanciaKm,
    tiempoH: calcularTiempoH(distanciaKm, velocidad),
    areaHa: calcularAreaHa(ancho, largo),
  }
}

/**
 * Formatea un número para lectura en pantalla con separador de miles local.
 * `maximumFractionDigits` se fija por salida para que los números grandes no
 * se vuelvan ilegibles en móvil.
 */
export function formatearNumero(valor: number, decimales: number): string {
  return valor.toLocaleString('es-MX', {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  })
}

/** Decimales apropiados por tipo de salida. */
export const DECIMALES: Record<keyof CampoResultado, number> = {
  carriles: 0,
  distanciaKm: 1,
  tiempoH: 1,
  areaHa: 1,
}
