import { reportData } from "@/content/report-data";
import { PrintOnLoad } from "./print-on-load";
import {
  BarChart,
  Donut,
  GOLD,
  GREEN,
  LineChart,
  MUTED_BAR,
} from "@/components/report/report-charts";

/**
 * Hoja de insights que el botón "Download PDF" abre para imprimir.
 *
 * Es la traducción a React del report_template.html de la simulación: mismo
 * banner, mismas dos filas de KPIs, mismas 6 gráficas con sus captions. Se
 * imprime desde el navegador (window.print con @page A4), así que no hace falta
 * ni Playwright ni un servicio que genere el PDF.
 *
 * ?print=1 dispara el diálogo de impresión al cargar; sin el parámetro la
 * página se puede revisar en pantalla.
 */

const MUTED = "#6E7C80";

/** Equivalente a los helpers N(...) de SamDashboard.Charts.cs. */
function n(value: number | null, decimals = 0): string {
  if (value === null || !Number.isFinite(value)) return "N/D";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/** Equivalente a Clock(...): segundos a h:mm:ss o m:ss. */
function clock(seconds: number): string {
  const s = Math.round(seconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (v: number) => String(v).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${m}:${pad(sec)}`;
}

type Stat = { label: string; value: string; note?: string };

export default function ReportPage() {
  const { metrics: m, controller, targetAreaM2, model, details, footnote } = reportData;

  const targetHa = targetAreaM2 / 10_000;
  const cutMin = m.cutSeconds / 60;
  const manoeuvreMin = m.manoeuvreSeconds / 60;
  const waitMin = m.waitSeconds / 60;

  // Las mismas páginas 0 y 1 de RefreshCards(), impresas como dos filas de 4.
  const statRows: Stat[][] = [
    [
      { label: "tons (T) harvested", value: n(m.harvestedKg / 1000, 2) },
      { label: "tons (T) CO2", value: n(m.co2Kg / 1000, 3), note: "ESTIMATE" },
      { label: "grain quality", value: "N/D", note: "NOT MODELED" },
      { label: "liters (L) diesel", value: n(m.dieselLitres), note: "ESTIMATE" },
    ],
    [
      { label: "operating time", value: clock(m.timeSeconds) },
      { label: "hectares (ha) harvested", value: n(m.harvestedHa, 2) },
      { label: "tons (T) delivered to silo", value: n(m.deliveredKg / 1000, 2) },
      {
        label: "fleet composition",
        value: `${controller.harvesterCount} H / ${controller.tractorCount} T`,
      },
    ],
  ];

  const hDist = m.harvesterDistancesMetres.map((d) => d / 1000);
  const tDist = m.tractorDistancesMetres.map((d) => d / 1000);

  const charts = [
    {
      title: "Wheat harvested",
      chart: <Donut pct={m.harvestedPercent} />,
      caption: `${n(m.harvestedHa, 2)} of ${n(targetHa, 2)} ha harvested.\nExcludes the obstacle and its safety margin.`,
    },
    {
      title: "Delivered over time",
      chart: <LineChart points={m.deliveredSeries} color={GREEN} yLabel="t" />,
      caption: `${n(m.deliveredKg / 1000, 2)} t have reached the silo.\nGrain on board is excluded from delivery.`,
    },
    {
      title: "Fleet composition",
      chart: (
        <BarChart
          values={[controller.harvesterCount, controller.tractorCount]}
          labels={["Harvester", "Tractor"]}
          colors={[GREEN, GOLD]}
          decimals={0}
        />
      ),
      caption: `${controller.harvesterCount} harvesters + ${controller.tractorCount} tractors.\nEach tractor has one articulated grain cart.`,
    },
    {
      title: "Harvester operating time",
      chart: (
        <BarChart
          values={[cutMin, manoeuvreMin, waitMin]}
          labels={["Cut", "Maneuver", "Stopped"]}
          colors={[GREEN, GOLD, MUTED_BAR]}
        />
      ),
      caption: `${n(cutMin, 1)} min cutting · ${n(manoeuvreMin, 1)} min maneuvering.\n${n(waitMin, 1)} stopped, including finished machines.`,
    },
    {
      title: "Distance by vehicle",
      chart: (
        <BarChart
          values={[...hDist, ...tDist]}
          labels={[
            ...hDist.map((_, i) => `H${i + 1}`),
            ...tDist.map((_, i) => `T${i + 1}`),
          ]}
          colors={[...hDist.map(() => GREEN), ...tDist.map(() => GOLD)]}
          decimals={2}
        />
      ),
      caption: `Harvesters: ${n(m.distanceHMetres / 1000, 2)} km · Tractors: ${n(m.distanceTMetres / 1000, 2)} km.\nDistance follows each vehicle's recorded path.`,
    },
    {
      title: "Diesel consumption",
      chart: <LineChart points={m.dieselSeries} color={GOLD} yLabel="L" />,
      caption: `${n(m.dieselLitres)} L estimated from time in each mode.\nConsumption rates are editable in Settings.`,
    },
  ];

  return (
    <>
      <PrintOnLoad />
      <style>{css}</style>

      <div className="report">
        <div className="header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/report/header_banner.png" alt="" />
        </div>

        <div className="content">
          <p className="meta-line">Selected Model: {model}</p>
          <p className="meta-line">{details}</p>

          {statRows.map((row, i) => (
            <div className="stats-row" key={i}>
              {row.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  {stat.note ? <div className="stat-note">{stat.note}</div> : null}
                </div>
              ))}
            </div>
          ))}

          <div className="charts-grid">
            {charts.map((c) => (
              <div className="chart-card" key={c.title}>
                <div className="chart-box">
                  <div className="chart-title">{c.title}</div>
                  {c.chart}
                </div>
                <div className="chart-caption">{c.caption}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="footer-rule" />
        {footnote ? <p className="footnote">{footnote}</p> : null}
      </div>
    </>
  );
}

/**
 * El CSS va inline y no en globals.css a propósito: esta hoja es un documento
 * A4, no una página del sitio, y no debe heredar nada del layout.
 */
const css = `
  @page { size: A4; margin: 0; }
  html, body { margin: 0; padding: 0; background: #fff; }
  .report * { box-sizing: border-box; }
  .report {
    width: 210mm;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    color: #1a1a1a;
    background: #fff;
  }
  .report .header img { width: 100%; display: block; }
  .report .content { padding: 30px 60px 20px; }
  .report .meta-line { font-weight: 700; font-size: 15px; margin: 0 0 6px; }

  .report .stats-row { display: flex; justify-content: space-between; margin: 22px 0; }
  .report .stat { flex: 1; text-align: center; padding: 0 6px; }
  .report .stat-value {
    font-size: 38px; font-weight: 800; color: ${GREEN};
    line-height: 1; margin-bottom: 6px;
  }
  .report .stat-label { font-size: 12px; font-weight: 700; color: #1a1a1a; }
  .report .stat-note {
    font-size: 9.5px; font-weight: 700; color: ${MUTED};
    letter-spacing: .4px; margin-top: 3px;
  }

  .report .charts-grid { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 16px; }
  .report .chart-card { width: calc(33.333% - 14px); }
  .report .chart-box {
    border: 4px solid ${GREEN}; border-radius: 10px;
    padding: 6px 6px 2px; background: #fff;
  }
  .report .chart-title { font-size: 11px; font-weight: 700; text-align: left; padding: 2px 4px 0; }
  .report .chart-svg { width: 100%; display: block; }
  .report .chart-caption {
    font-size: 10.5px; text-align: center; margin-top: 7px;
    line-height: 1.3; white-space: pre-line;
  }

  .report .footer-rule { border: none; border-top: 2px solid ${GREEN}; margin: 26px 60px 0; }
  .report .footnote { font-size: 8.5px; color: ${MUTED}; padding: 10px 60px 0; line-height: 1.4; }

  @media print {
    .report { width: auto; }
    .report .charts-grid { break-inside: avoid; }
    .report .chart-card { break-inside: avoid; }
  }
`;
