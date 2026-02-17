import { motion } from 'framer-motion'
import { FadeIn } from '../components/Motion'
import { Section } from '../components/Section'
import { EXPERIENCES } from '../data/profile'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Pengalaman Proyek"
      subtitle="Beberapa proyek yang pernah aku kerjakan selama kuliah."
      className="bg-section relative overflow-hidden"
    >
      {/* background animation khusus page Experience */}
      <motion.div
        className="pointer-events-none absolute -left-16 top-32 h-60 w-60 rounded-full bg-emerald-400/18 blur-3xl"
        animate={{ y: [0, 28, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-60px] top-0 h-80 w-80 rounded-full bg-cyan-400/18 blur-3xl"
        animate={{ y: [20, -10, 20] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="relative grid gap-6">
        {EXPERIENCES.map((exp, idx) => (
          <FadeIn key={`${exp.company}-${exp.role}`} delay={idx * 0.05}>
            <div className="card p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">
                    {exp.company}
                    {exp.type ? ` • ${exp.type}` : ''}{' '}
                    {exp.location ? ` • ${exp.location}` : ''}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-section px-4 py-2 text-xs font-semibold text-muted">
                  {exp.start} — {exp.end}
                </div>
              </div>

              <ul className="mt-5 grid gap-2">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-glow" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {exp.tech?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}

