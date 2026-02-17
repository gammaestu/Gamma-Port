import { FadeIn } from '../components/Motion'
import { Section } from '../components/Section'
import { PROJECTS } from '../data/profile'

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Beberapa project pilihan. Semua konten masih hardcoded dan bisa kamu edit di folder data."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, idx) => (
          <FadeIn key={p.title} delay={idx * 0.05} className="card p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
              <span className="rounded-xl bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Featured
              </span>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold tracking-widest text-muted">
                HIGHLIGHTS
              </p>
              <ul className="mt-3 grid gap-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-glow" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-section px-3 py-1 text-xs font-semibold text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            {p.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-text shadow-soft transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-section focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}

