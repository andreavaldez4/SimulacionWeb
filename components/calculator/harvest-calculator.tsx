'use client'

import { useId, useMemo, useState } from 'react'

import { FieldPreview } from '@/components/calculator/field-preview'
import { calculadora, type SliderCopy } from '@/content/project'
import { DECIMALES, calcularCampo, formatearNumero, type CampoParams } from '@/lib/harvest'

type Params = Record<SliderCopy['id'], number>

const defaults = Object.fromEntries(
  calculadora.sliders.map((s) => [s.id, s.defaultValue]),
) as Params

function Slider({
  copy,
  value,
  onChange,
}: {
  copy: SliderCopy
  value: number
  onChange: (v: number) => void
}) {
  const id = useId()

  return (
    <div className="mb-6">
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="font-medium text-green-dark">
          {copy.label}
        </label>
        <output htmlFor={id} className="text-2xl leading-none font-bold text-jd-green">
          {value}
          <span className="ml-1 text-sm font-medium text-ink-muted">{copy.unit}</span>
        </output>
      </div>
      <input
        id={id}
        type="range"
        className="slider-surco mt-2"
        min={copy.min}
        max={copy.max}
        step={copy.step}
        value={value}
        aria-valuetext={`${value} ${copy.unitLong}`}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}

export function HarvestCalculator() {
  const [params, setParams] = useState<Params>(defaults)

  // Cálculo 100% en el cliente: sin red, sin estado asíncrono.
  const resultado = useMemo(() => calcularCampo(params as CampoParams), [params])

  return (
    <div className="grid gap-8 border border-line bg-white p-5 md:grid-cols-2 md:gap-10 md:p-7">
      {/* En móvil el campo va después de los sliders: si va antes, su altura
          empuja los controles fuera de la pantalla. */}
      <div className="order-2">
        <FieldPreview
          ancho={params.ancho}
          largo={params.largo}
          anchoCorte={params.anchoCorte}
          carriles={resultado.carriles}
        />
        <p className="mt-5 border-t border-line pt-4 text-sm text-ink-muted">
          {calculadora.footnote}
        </p>
      </div>

      <div className="order-1">
        {calculadora.sliders.map((copy) => (
          <Slider
            key={copy.id}
            copy={copy}
            value={params[copy.id]}
            onChange={(v) => setParams((prev) => ({ ...prev, [copy.id]: v }))}
          />
        ))}

        <dl
          aria-live="polite"
          className="mt-8 grid grid-cols-2 gap-px border border-line bg-line"
        >
          {calculadora.results.map((r) => (
            <div key={r.id} className="bg-green-dark p-4">
              <dd className="text-3xl leading-none font-bold text-jd-yellow">
                {formatearNumero(resultado[r.id], DECIMALES[r.id])}
                {r.unit ? (
                  <span className="ml-1 text-base font-medium text-green-soft">{r.unit}</span>
                ) : null}
              </dd>
              <dt className="mt-2 eyebrow text-green-soft">{r.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
