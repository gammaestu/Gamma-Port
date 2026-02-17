import { FadeIn } from '../components/Motion'
import { Section } from '../components/Section'
import { SKILLS } from '../data/profile'

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Teknologi dan skill yang paling sering aku pakai untuk membangun produk."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {SKILLS.map((group, idx) => (
          <FadeIn key={group.title} delay={idx * 0.05} className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold tracking-tight">
                {group.title}
              </h3>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {group.items.length} items
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              {group.items.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-section px-4 py-3"
                >
                  <span className="text-sm font-medium text-text">{s.name}</span>
                  {s.level ? (
                    <span className="text-xs font-semibold text-muted">
                      {s.level}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}

