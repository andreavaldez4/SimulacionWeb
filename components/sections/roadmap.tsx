import { Section, SectionHeader } from '@/components/section'
import { roadmap, type RoadmapItem } from '@/content/project'

function Timeline({
  title,
  items,
  done,
}: {
  title: string
  items: readonly RoadmapItem[]
  done: boolean
}) {
  return (
    <div>
      <h3 className="mb-5 text-xl font-bold text-jd-yellow">{title}</h3>
      <ol className="list-none border-l border-green-rule p-0 pl-6">
        {items.map((item) => (
          <li key={item.title} className="relative mb-6 last:mb-0">
            <span
              aria-hidden="true"
              className={[
                'absolute top-1 -left-[31px] grid h-4 w-4 place-items-center text-[10px] leading-none',
                done
                  ? 'bg-jd-yellow font-bold text-green-dark'
                  : 'border border-jd-yellow bg-green-dark text-jd-yellow',
              ].join(' ')}
            >
              {done ? '✓' : '→'}
            </span>
            <p className="font-bold text-white">{item.title}</p>
            <p className="mt-1 text-green-soft">{item.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function Roadmap() {
  return (
    <Section id={roadmap.id} tone="dark">
      <SectionHeader eyebrow={roadmap.eyebrow} title={roadmap.title} tone="dark" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Timeline title={roadmap.doneTitle} items={roadmap.done} done />
        <Timeline title={roadmap.nextTitle} items={roadmap.next} done={false} />
      </div>

      <div className="mt-16 border-t border-green-rule pt-8">
        <h3 className="eyebrow mb-3 text-jd-yellow">{roadmap.businessTitle}</h3>
        <p className="max-w-[70ch] text-lg text-green-soft">{roadmap.business}</p>
      </div>
    </Section>
  )
}
