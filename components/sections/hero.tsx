import { BrandMark } from "@/components/brand-mark";
import {
  HeroMetricIcon,
  type IconName,
} from "@/components/diagrams/hero-metric-icons";
import { SimulationVideo } from "@/components/simulation-video";
import { hero, nav } from "@/content/project";

// Parallel to hero.metrics by index: keeps the icon choice out of content/
// (which holds copy, not visual identifiers) while staying in lockstep with it.
const metricIcons: IconName[] = ["cameras", "lap", "stalks"];

export function Hero() {
  return (
    <section
      id={hero.id}
      className="on-dark scroll-mt-[72px] bg-green-dark px-4 pt-14 pb-20 text-white surco-texture-dark md:pt-20 md:pb-16"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_.95fr] md:gap-14">
          <div>
            {/* La nav va abajo en móvil, así que el nombre del producto vive
                aquí para que la marca sea visible al abrir el sitio. */}
            <p className="mb-6 flex items-center gap-2 text-lg font-bold tracking-tight md:hidden">
              <BrandMark className="h-6 w-auto text-jd-yellow" />
              <span>
                {nav.brand.primary}{" "}
                <span className="text-jd-yellow">{nav.brand.accent}</span>
              </span>
            </p>
            <p className="eyebrow text-jd-yellow">{hero.eyebrow}</p>
            <h1 className="mt-4 max-w-[16ch] text-4xl leading-[1.03] font-bold tracking-tight md:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-[52ch] text-lg text-green-soft">
              {hero.subtitle}
            </p>
            <a
              href={hero.cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-xs bg-jd-yellow px-6 py-3 eyebrow text-green-dark hover:bg-white"
            >
              {hero.cta.label}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <SimulationVideo />
        </div>

        {/* Cada métrica es su propia celda con icono + eyebrow arriba y la
            cifra abajo sobre una línea base compartida: es la estructura que
            faltaba para que la tira dejara de leerse como números sueltos. */}
        <dl className="mt-12 grid grid-cols-1 gap-px border-t border-green-rule bg-green-rule pt-px sm:grid-cols-3">
          {hero.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="bg-green-dark py-6 sm:px-6 sm:py-7 sm:first:pl-0"
            >
              <div className="flex items-center gap-2 text-jd-yellow">
                <HeroMetricIcon
                  name={metricIcons[i]}
                  className="h-6 w-6 shrink-0"
                />
                <dt className="eyebrow text-lg text-green-soft">
                  {metric.label}
                </dt>
              </div>
              <dd className="mt-3 flex items-baseline gap-1.5 text-jd-yellow">
                <span className="text-4xl leading-none font-bold tracking-tight tabular-nums md:text-5xl">
                  {metric.value}
                </span>
                {metric.unit ? (
                  <span className="text-lg leading-none font-bold md:text-xl">
                    {metric.unit}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
