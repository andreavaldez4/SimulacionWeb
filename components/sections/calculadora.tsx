import { HarvestCalculator } from '@/components/calculator/harvest-calculator'
import { Section, SectionHeader } from '@/components/section'
import { calculadora } from '@/content/project'

export function Calculadora() {
  return (
    <Section id={calculadora.id} tone="bone">
      <SectionHeader
        eyebrow={calculadora.eyebrow}
        title={calculadora.title}
        intro={calculadora.intro}
      />
      <HarvestCalculator />
    </Section>
  )
}
