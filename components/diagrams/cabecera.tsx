import { algoritmo } from '@/content/project'

import { D } from './tokens'

/**
 * (c) Recorte de cabecera: el mismo campo con un borde punteado interior.
 * Los carriles solo ocupan el rectángulo interior; la franja entre ambos
 * bordes es el espacio reservado para maniobrar.
 */

const INSET = 26
const OUTER = { x: 18, y: 16, w: 284, h: 158 }
const INNER = {
  x: OUTER.x + INSET,
  y: OUTER.y + INSET,
  w: OUTER.w - INSET * 2,
  h: OUTER.h - INSET * 2,
}

const LANES = 5
const GAP = INNER.w / (LANES + 1)

export function DiagramCabecera() {
  return (
    <svg viewBox="0 0 320 190" className="h-auto w-full" role="img" aria-labelledby="d-cab-t">
      <title id="d-cab-t">
        Campo con una franja perimetral reservada, marcada con línea punteada, donde la máquina
        gira sin salirse del terreno
      </title>

      <rect {...{ x: OUTER.x, y: OUTER.y, width: OUTER.w, height: OUTER.h }} fill={D.field} stroke={D.fieldEdge} strokeWidth="2" />

      {/* Franja de cabecera: solo el perímetro se tiñe. Se usa una regla de
          relleno par-impar (marco exterior menos rectángulo interior) para que
          el interior del campo quede limpio. */}
      <path
        fillRule="evenodd"
        fill={D.earth}
        fillOpacity="0.14"
        d={
          `M ${OUTER.x} ${OUTER.y} h ${OUTER.w} v ${OUTER.h} h ${-OUTER.w} Z ` +
          `M ${INNER.x} ${INNER.y} h ${INNER.w} v ${INNER.h} h ${-INNER.w} Z`
        }
      />

      {/* Límite interior: hasta aquí llegan los carriles. */}
      <rect
        {...{ x: INNER.x, y: INNER.y, width: INNER.w, height: INNER.h }}
        fill="none"
        stroke={D.earth}
        strokeWidth="2"
        strokeDasharray="6 4"
      />

      {/* Carriles contenidos en el rectángulo interior. */}
      {Array.from({ length: LANES }, (_, i) => {
        const x = INNER.x + GAP * (i + 1)
        return (
          <g key={i}>
            <line x1={x} y1={INNER.y} x2={x} y2={INNER.y + INNER.h} stroke={D.routeShadow} strokeWidth="6" />
            <line x1={x} y1={INNER.y} x2={x} y2={INNER.y + INNER.h} stroke={D.route} strokeWidth="3" />
          </g>
        )
      })}

      {/* Giro de ejemplo: cabe dentro de la franja reservada sin tocar el borde
          exterior del campo. */}
      <path
        d={`M ${INNER.x + GAP} ${INNER.y} A ${GAP / 2} ${INSET - 6} 0 0 1 ${INNER.x + GAP * 2} ${INNER.y}`}
        fill="none"
        stroke={D.earth}
        strokeWidth="2.5"
      />

      {/* Etiqueta en la franja inferior, donde no hay carriles ni giros. */}
      <text
        x={OUTER.x + OUTER.w / 2}
        y={OUTER.y + OUTER.h - 9}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={D.earth}
      >
        {algoritmo.labels.cabecera}
      </text>
    </svg>
  )
}
