import { footer } from '@/content/project'

export function Footer() {
  return (
    /* pb extra en móvil: la nav inferior fija ocupa ~52px. */
    <footer className="on-dark border-t border-green-rule bg-green-dark px-4 pt-12 pb-28 text-green-soft md:pb-12">
      <div className="mx-auto grid w-full max-w-[1100px] gap-8 md:grid-cols-3">
        <div>
          <h2 className="eyebrow mb-3 text-jd-yellow">{footer.teamTitle}</h2>
          <p className="text-white">{footer.team.join(' · ')}</p>
        </div>

        <div>
          <p className="text-white">{footer.university}</p>
          <p className="mt-1 text-sm">{footer.course}</p>
        </div>

        <div>
          <a
            href={footer.repo.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 eyebrow text-jd-yellow underline underline-offset-4 hover:text-white"
          >
            {footer.repo.label}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1100px] border-t border-green-rule pt-6">
        <p className="eyebrow text-white">{footer.tagline}</p>
        <p className="mt-3 max-w-[70ch] text-sm">{footer.disclaimer}</p>
      </div>
    </footer>
  )
}
