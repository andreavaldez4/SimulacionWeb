import { ModelCardImage } from '@/components/model-card-image'
import { Section, SectionHeader } from '@/components/section'
import { equipo } from '@/content/project'

export function Equipo() {
  return (
    <Section id={equipo.id} tone="light">
      <SectionHeader eyebrow={equipo.eyebrow} title={equipo.title} intro={equipo.intro} />

      <h3 className="eyebrow mb-4 text-jd-green">{equipo.modelsTitle}</h3>
      <ul className="grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-4">
        {equipo.models.map((model) => (
          <li key={model.name} className="border border-line bg-white">
            <div className="border-b border-line bg-bone p-3 surco-texture">
              <ModelCardImage
                src={model.image}
                name={model.name}
                alt={model.name}
              />
            </div>
            <div className="p-3">
              <p className="font-bold text-green-dark">{model.name}</p>
              <p className="text-sm text-ink-muted">{model.author}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="eyebrow mt-14 mb-4 text-jd-green">{equipo.membersTitle}</h3>
      <ul className="list-none border-t border-line p-0">
        {equipo.members.map((member) => (
          <li
            key={member.name}
            className="grid gap-1 border-b border-line py-4 sm:grid-cols-[140px_1fr] sm:gap-6"
          >
            <p className="font-bold text-green-dark">{member.name}</p>
            <p className="text-ink-muted">{member.contribution}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
