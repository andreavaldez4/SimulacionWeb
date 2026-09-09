import { Section, SectionHeader } from '@/components/section'
import { arquitectura } from '@/content/project'

export function Arquitectura() {
  return (
    <Section id={arquitectura.id} tone="light">
      <SectionHeader
        eyebrow={arquitectura.eyebrow}
        title={arquitectura.title}
        intro={arquitectura.intro}
      />

      {/* Flujo vertical: cajas y conectores en CSS, sin librerías. */}
      <ol className="mx-auto mb-16 max-w-[520px] list-none p-0">
        {arquitectura.flow.map((step, i) => (
          <li key={step.title}>
            <div className="border border-jd-green bg-white p-4 text-center">
              <p className="font-bold text-green-dark">{step.title}</p>
              <p className="mt-1 text-sm text-ink-muted">{step.detail}</p>
            </div>
            {i < arquitectura.flow.length - 1 ? (
              <div aria-hidden="true" className="flex flex-col items-center">
                <span className="h-6 w-px bg-jd-green" />
                <span className="-mt-1 text-jd-green">▼</span>
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <h3 className="eyebrow mb-4 text-jd-green">{arquitectura.scriptsTitle}</h3>
      <ul className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {arquitectura.scripts.map((script) => (
          <li key={script.name} className="border border-line bg-white p-4">
            <code className="text-sm font-bold text-green-dark">{script.name}</code>
            <p className="mt-2 text-sm leading-normal text-ink-muted">{script.description}</p>
          </li>
        ))}
      </ul>

      <h3 className="eyebrow mt-12 mb-4 text-jd-green">{arquitectura.chipsTitle}</h3>
      <ul className="flex list-none flex-wrap gap-2 p-0">
        {arquitectura.chips.map((chip) => (
          <li
            key={chip}
            className="border border-jd-green px-3 py-1.5 eyebrow text-green-dark"
          >
            {chip}
          </li>
        ))}
      </ul>
    </Section>
  )
}
