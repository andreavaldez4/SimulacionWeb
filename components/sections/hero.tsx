import { SimulationVideo } from '@/components/simulation-video'
import { hero } from '@/content/project'

export function Hero() {
  return (
    <section
      id={hero.id}
      className="on-dark scroll-mt-[72px] bg-green-dark px-4 pt-14 pb-20 text-white surco-texture-dark md:pt-20 md:pb-16"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_.95fr] md:gap-14">
          <div>
            <p className="eyebrow text-jd-yellow">{hero.eyebrow}</p>
            <h1 className="mt-4 max-w-[16ch] text-4xl leading-[1.03] font-bold tracking-tight md:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-[52ch] text-lg text-green-soft">{hero.subtitle}</p>
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

        <dl className="mt-12 grid grid-cols-3 border-t border-green-rule pt-6">
          {hero.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={i === 0 ? '' : 'border-l border-green-rule pl-4 md:pl-6'}
            >
              <dd className="text-4xl leading-none font-bold text-jd-yellow md:text-5xl">
                {metric.value}
              </dd>
              <dt className="mt-2 eyebrow text-green-soft">{metric.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
