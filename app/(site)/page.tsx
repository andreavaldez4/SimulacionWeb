import { Algoritmo } from '@/components/sections/algoritmo'
import { Arquitectura } from '@/components/sections/arquitectura'
import { Calculadora } from '@/components/sections/calculadora'
import { Equipo } from '@/components/sections/equipo'
import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { Roadmap } from '@/components/sections/roadmap'
import { Simulaciones } from '@/components/sections/simulaciones'

export default function Page() {
  return (
    <main>
      <Hero />
      <Algoritmo />
      <Arquitectura />
      <Simulaciones />
      <Calculadora />
      <Equipo />
      <Roadmap />
      <Footer />
    </main>
  )
}
