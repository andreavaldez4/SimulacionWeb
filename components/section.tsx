import type { ReactNode } from 'react'

type Tone = 'bone' | 'light' | 'dark'

const toneClass: Record<Tone, string> = {
  bone: 'bg-bone text-ink',
  light: 'bg-green-light text-ink',
  dark: 'on-dark bg-green-dark text-white surco-texture-dark',
}

export function Section({
  id,
  tone = 'bone',
  className = '',
  children,
}: {
  id?: string
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[72px] px-4 py-16 md:py-24 ${toneClass[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1100px]">{children}</div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = 'light',
}: {
  eyebrow: string
  title: string
  intro?: string
  tone?: 'light' | 'dark'
}) {
  const onDark = tone === 'dark'

  return (
    <header className="mb-10 md:mb-14">
      <p className={`eyebrow mb-3 ${onDark ? 'text-jd-yellow' : 'text-jd-green'}`}>{eyebrow}</p>
      <h2
        className={`max-w-[18ch] text-3xl leading-[1.05] font-bold tracking-tight md:text-5xl ${
          onDark ? 'text-white' : 'text-green-dark'
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 max-w-[62ch] text-lg ${onDark ? 'text-green-soft' : 'text-ink-muted'}`}>
          {intro}
        </p>
      ) : null}
    </header>
  )
}

/** Divisor de surcos entre bloques. */
export function SurcoRule({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <div
      aria-hidden="true"
      className={tone === 'dark' ? 'surco-divider-dark' : 'surco-divider'}
    />
  )
}
