import type { ReactNode } from 'react'

import { DiagramAlternado } from '@/components/diagrams/alternado'
import { DiagramBoustrophedon } from '@/components/diagrams/boustrophedon'
import { DiagramCabecera } from '@/components/diagrams/cabecera'
import { DiagramRejilla } from '@/components/diagrams/rejilla'
import { Section, SectionHeader } from '@/components/section'
import { algoritmo } from '@/content/project'

const diagrams: Record<string, ReactNode> = {
  boustrophedon: <DiagramBoustrophedon />,
  alternado: <DiagramAlternado />,
  cabecera: <DiagramCabecera />,
  rejilla: <DiagramRejilla />,
}

export function Algoritmo() {
  return (
    <Section id={algoritmo.id} tone="bone">
      <SectionHeader
        eyebrow={algoritmo.eyebrow}
        title={algoritmo.title}
        intro={algoritmo.intro}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {algoritmo.diagrams.map((item) => (
          <article key={item.id} className="border border-line bg-white p-5">
            <div className="mb-5">{diagrams[item.id]}</div>
            <h3 className="text-xl font-bold text-green-dark">{item.title}</h3>
            <p className="mt-2 text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
