import { algoritmo } from '@/content/project'

import { D } from './tokens'

/**
 * (d) Rejilla espacial: el campo dividido en celdas, con las espigas
 * repartidas entre ellas. Solo las cuatro celdas que toca el cabezal se
 * resaltan; las demás no se consultan en ese frame.
 */

const OUTER = { x: 18, y: 16, w: 284, h: 158 }
const COLS = 8
const ROWS = 5
const CW = OUTER.w / COLS
const CH = OUTER.h / ROWS

/** Celdas bajo el cabezal: un bloque de 2x2. */
const ACTIVE = [
  [3, 1],
  [4, 1],
  [3, 2],
  [4, 2],
] as const

const isActive = (c: number, r: number) => ACTIVE.some(([ac, ar]) => ac === c && ar === r)

/**
 * Posiciones de espigas deterministas: un hash simple sobre el índice evita
 * Math.random, que produciría marcado distinto en servidor y cliente.
 */
function seeded(i: number, salt: number): number {
  const v = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453
  return v - Math.floor(v)
}

const espigas = Array.from({ length: 120 }, (_, i) => ({
  x: OUTER.x + 4 + seeded(i, 1) * (OUTER.w - 8),
  y: OUTER.y + 4 + seeded(i, 2) * (OUTER.h - 8),
}))

export function DiagramRejilla() {
  return (
    <svg viewBox="0 -14 320 204" className="h-auto w-full" role="img" aria-labelledby="d-rej-t">
      <title id="d-rej-t">
        Campo dividido en una rejilla de celdas con espigas distribuidas; solo las cuatro celdas
        que toca el cabezal aparecen resaltadas
      </title>

      <rect {...{ x: OUTER.x, y: OUTER.y, width: OUTER.w, height: OUTER.h }} fill={D.field} stroke={D.fieldEdge} strokeWidth="2" />

      {/* Celdas activas, pintadas debajo de la rejilla y las espigas. */}
      {ACTIVE.map(([c, r]) => (
        <rect
          key={`${c}-${r}`}
          x={OUTER.x + c * CW}
          y={OUTER.y + r * CH}
          width={CW}
          height={CH}
          fill={D.route}
        />
      ))}

      {/* Líneas de la rejilla. */}
      {Array.from({ length: COLS - 1 }, (_, i) => (
        <line
          key={`c${i}`}
          x1={OUTER.x + CW * (i + 1)}
          y1={OUTER.y}
          x2={OUTER.x + CW * (i + 1)}
          y2={OUTER.y + OUTER.h}
          stroke={D.grid}
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: ROWS - 1 }, (_, i) => (
        <line
          key={`r${i}`}
          x1={OUTER.x}
          y1={OUTER.y + CH * (i + 1)}
          x2={OUTER.x + OUTER.w}
          y2={OUTER.y + CH * (i + 1)}
          stroke={D.grid}
          strokeWidth="1"
        />
      ))}

      {/* Espigas. Las que caen en celdas activas se marcan más oscuras. */}
      {espigas.map((e, i) => {
        const c = Math.floor((e.x - OUTER.x) / CW)
        const r = Math.floor((e.y - OUTER.y) / CH)
        const active = isActive(c, r)
        return (
          <circle
            key={i}
            cx={e.x.toFixed(2)}
            cy={e.y.toFixed(2)}
            r={active ? 2.2 : 1.6}
            fill={active ? D.routeShadow : D.fieldEdge}
            fillOpacity={active ? 1 : 0.45}
          />
        )
      })}

      {/* Cabezal sobre el bloque de celdas consultadas. */}
      <rect
        x={OUTER.x + ACTIVE[0][0] * CW}
        y={OUTER.y + ACTIVE[0][1] * CH}
        width={CW * 2}
        height={CH * 2}
        fill="none"
        stroke={D.routeShadow}
        strokeWidth="2.5"
      />

      {/* Etiqueta con guía hasta el bloque, en la banda superior libre. */}
      <line
        x1={OUTER.x + ACTIVE[0][0] * CW + CW}
        y1={OUTER.y + ACTIVE[0][1] * CH}
        x2={OUTER.x + ACTIVE[0][0] * CW + CW}
        y2={OUTER.y - 8}
        stroke={D.routeShadow}
        strokeWidth="1.5"
      />
      <text
        x={OUTER.x + ACTIVE[0][0] * CW + CW}
        y={OUTER.y - 12}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={D.routeShadow}
      >
        {algoritmo.labels.cabezal}
      </text>
    </svg>
  )
}
