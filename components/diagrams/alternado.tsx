import { algoritmo } from '@/content/project'

import { D } from './tokens'

/**
 * (b) Secuencial vs. carriles alternados.
 *
 * Izquierda: el orden 1-2-3-4 exige un giro del ancho de un carril, más
 * cerrado que el radio real de la máquina (se marca en café).
 * Derecha: el orden 1-3-2-4 da a cada giro el doble de espacio.
 */

const FIELD = { x: 16, y: 16, w: 148, h: 116 }
const LANES = 4
const GAP = 32

// Carriles centrados, con la cabecera inferior libre para dibujar el giro.
const X0 = FIELD.x + (FIELD.w - GAP * (LANES - 1)) / 2
const Y_TOP = FIELD.y + 12
const Y_BOT = FIELD.y + FIELD.h - 34

const laneX = (i: number) => X0 + i * GAP

function Panel({
  order,
  label,
  tight,
  titleId,
  description,
}: {
  order: number[]
  label: string
  tight: boolean
  titleId: string
  description: string
}) {
  return (
    <figure className="m-0">
      <svg viewBox="0 0 180 148" className="h-auto w-full" role="img" aria-labelledby={titleId}>
        <title id={titleId}>{description}</title>

        <rect
          x={FIELD.x}
          y={FIELD.y}
          width={FIELD.w}
          height={FIELD.h}
          fill={D.field}
          stroke={D.fieldEdge}
          strokeWidth="2"
        />

        {/* Carriles en su posición física; el número indica en qué momento se
            visita cada uno. */}
        {order.map((lane, step) => {
          const x = laneX(lane)
          return (
            <g key={lane}>
              <line x1={x} y1={Y_TOP} x2={x} y2={Y_BOT} stroke={D.routeShadow} strokeWidth="6" />
              <line x1={x} y1={Y_TOP} x2={x} y2={Y_BOT} stroke={D.route} strokeWidth="3" />
              <text
                x={x}
                y={Y_TOP - 3}
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill={D.ink}
              >
                {step + 1}
              </text>
            </g>
          )
        })}

        {/* Giro entre el primer y el segundo carril visitado. Su radio es la
            mitad de la separación: en el caso secuencial queda tan cerrado que
            se marca en café y punteado como maniobra imposible. */}
        {(() => {
          const from = laneX(order[0])
          const to = laneX(order[1])
          const r = Math.abs(to - from) / 2
          return (
            <path
              d={`M ${from} ${Y_BOT} A ${r} ${r} 0 0 0 ${to} ${Y_BOT}`}
              fill="none"
              stroke={tight ? D.earth : D.routeShadow}
              strokeWidth="2.5"
              strokeDasharray={tight ? '4 3' : undefined}
            />
          )
        })()}
      </svg>

      <figcaption className="mt-2 eyebrow text-jd-green">{label}</figcaption>
    </figure>
  )
}

export function DiagramAlternado() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Panel
        order={[0, 1, 2, 3]}
        label={algoritmo.labels.secuencial}
        tight
        titleId="d-seq-t"
        description={algoritmo.alts.secuencial}
      />
      <Panel
        order={[0, 2, 1, 3]}
        label={algoritmo.labels.alternado}
        tight={false}
        titleId="d-alt-t"
        description={algoritmo.alts.alternado}
      />
    </div>
  )
}
