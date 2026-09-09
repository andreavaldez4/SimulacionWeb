import { D } from '@/components/diagrams/tokens'
import { calculadora } from '@/content/project'
import type { CampoParams } from '@/lib/harvest'

/**
 * Vista superior del campo. Redibuja los carriles a partir de los mismos
 * parámetros que alimentan las fórmulas, respetando la proporción real
 * ancho:largo del terreno dentro de un marco fijo.
 */

const BOX = { w: 320, h: 280, pad: 12 }

/** Por encima de este número los carriles se funden visualmente: se ralean. */
const MAX_DRAWN = 60

export function FieldPreview({
  ancho,
  largo,
  anchoCorte,
  carriles,
}: Pick<CampoParams, 'ancho' | 'largo' | 'anchoCorte'> & { carriles: number }) {
  const inner = { w: BOX.w - BOX.pad * 2, h: BOX.h - BOX.pad * 2 }

  // Escala única para ambos ejes: el campo conserva su proporción.
  const scale = Math.min(inner.w / ancho, inner.h / largo)
  const fw = ancho * scale
  const fh = largo * scale
  const fx = (BOX.w - fw) / 2
  const fy = (BOX.h - fh) / 2

  const laneW = anchoCorte * scale
  const step = Math.max(1, Math.ceil(carriles / MAX_DRAWN))
  const raleado = step > 1

  // Grosor del carril: una fracción del ancho real para que siempre quede
  // verde visible entre carriles y la rejilla no se funda en un bloque sólido.
  const strokeW = Math.min(Math.max(laneW * 0.34, 0.8), 5)

  // Separación real entre carriles dibujados, ya considerando el raleo.
  const halo = laneW * step > strokeW + 2.5

  const lanes: number[] = []
  for (let i = 0; i < carriles; i += step) {
    // Centro del carril i, recortado al borde derecho del campo.
    lanes.push(fx + Math.min(i * laneW + laneW / 2, fw))
  }

  return (
    <figure className="m-0">
      <svg
        viewBox={`0 0 ${BOX.w} ${BOX.h}`}
        className="h-auto w-full"
        role="img"
        aria-label={calculadora.previewAlt}
      >
        <rect x={fx} y={fy} width={fw} height={fh} fill={D.field} stroke={D.fieldEdge} strokeWidth="2" />

        {/* Cada carril lleva una base oscura para destacar sobre el verde
            claro, pero solo cuando hay hueco suficiente: con muchos carriles
            las bases se tocarían y el campo se vería como un bloque sólido. */}
        <g clipPath="url(#campo-clip)">
          {halo
            ? lanes.map((x, i) => (
                <line
                  key={`s${i}`}
                  x1={x}
                  y1={fy + 3}
                  x2={x}
                  y2={fy + fh - 3}
                  stroke={D.routeShadow}
                  strokeWidth={strokeW + 2}
                />
              ))
            : null}
          {lanes.map((x, i) => (
            <line
              key={`y${i}`}
              x1={x}
              y1={fy + 3}
              x2={x}
              y2={fy + fh - 3}
              stroke={D.route}
              strokeWidth={strokeW}
            />
          ))}
        </g>

        <defs>
          <clipPath id="campo-clip">
            <rect x={fx} y={fy} width={fw} height={fh} />
          </clipPath>
        </defs>
      </svg>

      <figcaption className="mt-2 text-sm text-ink-muted">
        {calculadora.previewLabel} · {ancho} × {largo} m
        {raleado ? ` · ${calculadora.previewThinned(step)}` : ''}
      </figcaption>
    </figure>
  )
}
