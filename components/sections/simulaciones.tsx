import { Section, SectionHeader } from "@/components/section";
import { simulaciones, type SimulationRun } from "@/content/project";

/**
 * Las corridas grabadas, cada una con su reporte de insights en PDF.
 *
 * Los videos se sirven desde /public y se declaran en content/project.ts: no
 * hay llamada de red detrás de esta sección. Es lo que permite que se vea igual
 * en el despliegue público (donde la API en localhost no existe) y en la
 * presentación sin conexión.
 */

/** Fecha de la grabación en algo leíble; si viene rara, se muestra cruda. */
function fecha(valor: string): string {
  const d = new Date(valor.replace(" ", "T"));
  if (Number.isNaN(d.getTime())) return valor;

  return d.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Corrida({ run, indice }: { run: SimulationRun; indice: number }) {
  return (
    <article className="border-t-2 border-jd-green pt-6">
      <header className="mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h3 className="text-xl font-bold tracking-tight text-green-dark md:text-2xl">
          {simulaciones.runLabel} {indice + 1}
          <span className="ml-3 font-normal text-ink-muted">{run.id}</span>
        </h3>

        <div className="flex items-center gap-3">
          {indice === 0 ? (
            <span className="bg-jd-yellow px-2 py-1 eyebrow text-xs text-green-dark">
              {simulaciones.latestBadge}
            </span>
          ) : null}
          <time className="text-sm text-ink-muted">{fecha(run.date)}</time>
        </div>
      </header>

      {/*
        Ancho acotado: sin las tarjetas de KPIs al lado, un video a todo lo
        ancho de la sección se come la página entera en escritorio.
      */}
      <div className="max-w-4xl">
        <video
          className="aspect-video w-full border border-line bg-green-dark object-contain"
          src={run.src}
          controls
          playsInline
          preload="metadata"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        {/*
          Abre /report?print=1 en otra pestaña: la hoja se dibuja y dispara el
          diálogo de impresión, donde el navegador ofrece "Guardar como PDF".
          Así no hace falta ningún servicio que genere el archivo.
        */}
        <a
          className="inline-flex items-center gap-2 border-2 border-jd-green bg-jd-green px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jd-green"
          href="/report?print=1"
          target="_blank"
          rel="noopener"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 1.5v8.5" />
            <path d="M4.5 7 8 10.5 11.5 7" />
            <path d="M2 12.5v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1" />
          </svg>
          {simulaciones.downloadPdf}
        </a>

        <p className="text-sm text-ink-muted">{simulaciones.downloadPdfHint}</p>
      </div>
    </article>
  );
}

export function Simulaciones() {
  return (
    <Section id={simulaciones.id} tone="light">
      <SectionHeader
        eyebrow={simulaciones.eyebrow}
        title={simulaciones.title}
        intro={simulaciones.intro}
      />

      <div className="flex flex-col gap-14 md:gap-20">
        {simulaciones.runs.map((run, i) => (
          <Corrida key={run.src} run={run} indice={i} />
        ))}
      </div>
    </Section>
  );
}
