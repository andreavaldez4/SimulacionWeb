/**
 * Las 6 gráficas del reporte, en el mismo orden que GraphIndex 0-5 de
 * SamDashboard.Charts.cs (dona, línea, barras, barras, barras, línea).
 *
 * Se dibujan en SVG inline en vez de con matplotlib: la página del reporte se
 * imprime desde el navegador, así que no hay proceso de Python en producción y
 * la impresión sale vectorial en vez de un PNG de 200 dpi.
 */

import type { SerieTiempo } from "@/content/report-data";

/** Mismos colores que SamDashboard.cs, para que el PDF combine con Unity. */
export const GREEN = "#21592C";
export const GOLD = "#CCAC31";
export const MUTED_BAR = "#85998D";
const TRACK = "#E3E6E4";
const AXIS = "#999999";
const TICK = "#666666";

const W = 300;
const H = 190;

export function Donut({ pct }: { pct: number }) {
  const r = 62;
  const stroke = 24;
  const c = 2 * Math.PI * r;
  const done = (Math.min(100, Math.max(0, pct)) / 100) * c;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg" role="img">
      <g transform={`translate(${W / 2} ${H / 2}) rotate(-90)`}>
        <circle r={r} fill="none" stroke={TRACK} strokeWidth={stroke} />
        <circle
          r={r}
          fill="none"
          stroke={GREEN}
          strokeWidth={stroke}
          strokeDasharray={`${done} ${c - done}`}
        />
      </g>
      <text
        x={W / 2}
        y={H / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="30"
        fontWeight="800"
        fill={GREEN}
      >
        {Math.round(pct)}%
      </text>
    </svg>
  );
}

export function LineChart({
  points,
  color = GREEN,
  yLabel = "",
}: {
  points: SerieTiempo[];
  color?: string;
  yLabel?: string;
}) {
  const pad = { top: 12, right: 10, bottom: 22, left: 34 };
  const iw = W - pad.left - pad.right;
  const ih = H - pad.top - pad.bottom;

  // Segundos a minutos, igual que en Unity.
  const xs = points.map((p) => p.t / 60);
  const ys = points.map((p) => p.v);
  const xMax = Math.max(...xs, 1);
  const yMax = Math.max(...ys, 1);

  const px = (x: number) => pad.left + (x / xMax) * iw;
  const py = (y: number) => pad.top + ih - (y / yMax) * ih;

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${px(xs[i]).toFixed(1)},${py(p.v).toFixed(1)}`)
    .join(" ");
  const area = `${path} L${px(xs[xs.length - 1]).toFixed(1)},${pad.top + ih} L${px(xs[0]).toFixed(1)},${pad.top + ih} Z`;

  const fmtTick = (v: number) => (v >= 100 ? v.toFixed(0) : v.toFixed(1));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg" role="img">
      <path d={area} fill={color} fillOpacity={0.08} />
      <path d={path} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />

      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + ih} stroke={AXIS} strokeWidth={1} />
      <line x1={pad.left} y1={pad.top + ih} x2={pad.left + iw} y2={pad.top + ih} stroke={AXIS} strokeWidth={1} />

      {[0, yMax / 2, yMax].map((v, i) => (
        <text key={i} x={pad.left - 4} y={py(v)} textAnchor="end" dominantBaseline="central" fontSize="7" fill={TICK}>
          {fmtTick(v)}
        </text>
      ))}
      {[0, xMax / 2, xMax].map((v, i) => (
        <text
          key={i}
          x={px(v)}
          y={pad.top + ih + 10}
          textAnchor={i === 0 ? "start" : i === 2 ? "end" : "middle"}
          fontSize="7"
          fill={TICK}
        >
          {v.toFixed(0)}
        </text>
      ))}
      {yLabel ? (
        <text x={pad.left - 4} y={pad.top - 4} textAnchor="end" fontSize="7" fill={TICK}>
          {yLabel}
        </text>
      ) : null}
      <text x={pad.left + iw} y={H - 3} textAnchor="end" fontSize="7" fill={TICK}>
        min
      </text>
    </svg>
  );
}

export function BarChart({
  values,
  labels,
  colors,
  decimals = 1,
}: {
  values: number[];
  labels: string[];
  colors: string[];
  decimals?: number;
}) {
  const pad = { top: 16, right: 8, bottom: 20, left: 30 };
  const iw = W - pad.left - pad.right;
  const ih = H - pad.top - pad.bottom;

  const yMax = Math.max(...values, 1);
  const slot = iw / values.length;
  const bw = Math.min(slot * 0.6, 46);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg" role="img">
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + ih} stroke={AXIS} strokeWidth={1} />
      <line x1={pad.left} y1={pad.top + ih} x2={pad.left + iw} y2={pad.top + ih} stroke={AXIS} strokeWidth={1} />

      {values.map((v, i) => {
        const h = (v / yMax) * ih;
        const x = pad.left + slot * i + (slot - bw) / 2;
        const y = pad.top + ih - h;
        return (
          <g key={i}>
            <rect x={x} y={y} width={bw} height={h} fill={colors[i] ?? GREEN} />
            <text x={x + bw / 2} y={y - 4} textAnchor="middle" fontSize="7.5" fill="#333333">
              {v.toFixed(decimals)}
            </text>
            <text x={x + bw / 2} y={pad.top + ih + 11} textAnchor="middle" fontSize="7.5" fill={TICK}>
              {labels[i]}
            </text>
          </g>
        );
      })}

      {[0, yMax / 2, yMax].map((v, i) => (
        <text key={i} x={pad.left - 4} y={pad.top + ih - (v / yMax) * ih} textAnchor="end" dominantBaseline="central" fontSize="7" fill={TICK}>
          {v >= 100 ? v.toFixed(0) : v.toFixed(1)}
        </text>
      ))}
    </svg>
  );
}
