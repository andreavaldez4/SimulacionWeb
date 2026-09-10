/**
 * Datos del reporte PDF de insights.
 *
 * Mientras la simulación no publique su propio payload, estos números son
 * simulados y los tres videos comparten el mismo reporte. La forma es la misma
 * que la del JSON que Unity mandaría por websocket (ver generate_report.py):
 * cuando llegue el dato real solo hay que sustituir este objeto, no el
 * componente que lo dibuja.
 */

export type SerieTiempo = { t: number; v: number };

export type ReportData = {
  model: string;
  details: string;
  metrics: {
    harvestedKg: number;
    co2Kg: number;
    dieselLitres: number;
    timeSeconds: number;
    harvestedHa: number;
    deliveredKg: number;
    distanceHMetres: number;
    distanceTMetres: number;
    harvestedPercent: number;
    cutSeconds: number;
    manoeuvreSeconds: number;
    waitSeconds: number;
    harvesterDistancesMetres: number[];
    tractorDistancesMetres: number[];
    /** Toneladas entregadas al silo, acumuladas. */
    deliveredSeries: SerieTiempo[];
    /** Litros de diésel acumulados. */
    dieselSeries: SerieTiempo[];
    revenueMXN: number | null;
    laborCostMXN: number | null;
  };
  controller: { harvesterCount: number; tractorCount: number };
  targetAreaM2: number;
  footnote: string;
};

/** Curva acumulada suave: `pasos` puntos hasta `total` en `duracion` segundos. */
function acumulada(total: number, duracion: number, pasos = 14): SerieTiempo[] {
  return Array.from({ length: pasos + 1 }, (_, i) => {
    const f = i / pasos;
    return {
      t: Math.round(f * duracion),
      // Arranca lento (la primera pasada aún no llega al silo) y se endereza.
      v: Number((total * Math.pow(f, 1.18)).toFixed(3)),
    };
  });
}

export const reportData: ReportData = {
  model: "CosechaConAssets · Unity 6 multi-agent run",
  details: "2 harvesters + 2 tractors · 3.11 ha field · boustrophedon route",
  metrics: {
    harvestedKg: 24_180,
    co2Kg: 1_142,
    dieselLitres: 437,
    timeSeconds: 5_412,
    harvestedHa: 3.02,
    deliveredKg: 22_940,
    distanceHMetres: 18_640,
    distanceTMetres: 12_305,
    harvestedPercent: 97.1,
    cutSeconds: 3_690,
    manoeuvreSeconds: 1_128,
    waitSeconds: 594,
    harvesterDistancesMetres: [9_720, 8_920],
    tractorDistancesMetres: [6_480, 5_825],
    deliveredSeries: acumulada(22.94, 5_412),
    dieselSeries: acumulada(437, 5_412),
    revenueMXN: 2_145_600,
    laborCostMXN: 318_400,
  },
  controller: { harvesterCount: 2, tractorCount: 2 },
  targetAreaM2: 31_104,
  footnote:
    "Diesel and CO2 are estimated using editable rates; they are not measurements. CO2 reflects combustion only, not life-cycle emissions. Figures on this report are simulated while the live run feed is connected.",
};
