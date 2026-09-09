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
        <output
          htmlFor={id}
          className="text-2xl leading-none font-bold text-green-dark tabular-nums"
        >
          {value}
          <span className="ml-1 text-sm font-medium text-jd-green">{copy.unit}</span>
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

        {/* KPIs: el número manda. La etiqueta va arriba y en menor jerarquía
            para que la vista aterrice primero en la cifra, y la unidad se
            queda en blanco (no en verde apagado) para que se lea a distancia. */}
        <dl
          aria-live="polite"
          className="mt-8 grid grid-cols-2 gap-1 bg-green-rule p-1"
        >
          {calculadora.results.map((r) => (
            <div
              key={r.id}
              className="border-l-4 border-jd-yellow bg-green-dark px-4 py-5"
            >
              <dt className="eyebrow text-[0.6875rem] text-green-soft">
                {r.label}
              </dt>
              <dd className="mt-2 flex items-baseline gap-1.5 text-jd-yellow">
                <span className="text-[2.5rem] leading-[0.9] font-bold tracking-tight tabular-nums">
                  {formatearNumero(
                    resultado[r.id],
                    DECIMALES[r.id],
                    calculadora.locale,
                  )}
                </span>
                {r.unit ? (
                  <span className="text-lg font-bold text-white">{r.unit}</span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
