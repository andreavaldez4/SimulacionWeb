import { algoritmo } from '@/content/project'

import { D } from './tokens'

/**
 * (a) Recorrido en surco: carriles paralelos unidos por giros de 180° en arco
 * en los extremos, trazados como una sola polilínea continua.
 *
 * La ruta se dibuja dos veces: un trazo oscuro más ancho debajo y el amarillo
 * encima, para que la línea se distinga sobre el verde claro del campo.
 */

const FIELD = { x: 18, y: 16, w: 284, h: 158 }
const LANES = 6
const GAP = 40
const R = GAP / 2

// Bloque de carriles centrado en el campo: el último carril queda tan lejos
// del borde derecho como el primero del izquierdo.
const X0 = FIELD.x + (FIELD.w - GAP * (LANES - 1)) / 2
const Y_TOP = FIELD.y + 22
const Y_BOT = FIELD.y + FIELD.h - 22

/** Traza los carriles alternando el sentido, con un semicírculo en cada extremo. */
function buildPath(): string {
  let d = `M ${X0} ${Y_TOP}`

  for (let i = 0; i < LANES; i += 1) {
    const x = X0 + i * GAP
    const goingDown = i % 2 === 0
    const end = goingDown ? Y_BOT : Y_TOP

    // Tramo recto del carril.
    d += ` L ${x} ${end}`

    // Giro de 180° hacia el carril contiguo. El sweep-flag alterna para que
    // el arco quede siempre fuera del campo cosechado.
    if (i < LANES - 1) {
      d += ` A ${R} ${R} 0 0 ${goingDown ? 0 : 1} ${x + GAP} ${end}`
    }
  }

  return d
}

const path = buildPath()

export function DiagramBoustrophedon() {
  return (
    <svg viewBox="0 0 320 190" className="h-auto w-full" role="img" aria-labelledby="d-bous-t">
      <title id="d-bous-t">{algoritmo.alts.boustrophedon}</title>

      <rect
        x={FIELD.x}
        y={FIELD.y}
        width={FIELD.w}
        height={FIELD.h}
        fill={D.field}
        stroke={D.fieldEdge}
        strokeWidth="2"
      />

      <path d={path} fill="none" stroke={D.routeShadow} strokeWidth="7" strokeLinecap="round" />
      <path d={path} fill="none" stroke={D.route} strokeWidth="3.5" strokeLinecap="round" />

      {/* Punto de arranque. */}
      <circle cx={X0} cy={Y_TOP} r="5" fill={D.routeShadow} />
      <circle cx={X0} cy={Y_TOP} r="2" fill={D.route} />
    </svg>
  )
}
