import { motion } from 'framer-motion'
import { FadeIn } from '../components/Motion'
import { Section } from '../components/Section'
import { PROFILE } from '../data/profile'

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Sedikit cerita tentang siapa aku, cara kerja, dan apa yang aku suka bangun."
      className="bg-section relative overflow-hidden"
    >
      {/* background animation khusus page About */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-primary/18 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-500/18 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, 18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative grid gap-6 lg:grid-cols-12">
        <FadeIn className="card p-6 lg:col-span-7">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {PROFILE.about}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: 'Prinsip',
                value: 'Clean code, aksesibilitas, dan UI konsisten.',
              },
              {
                title: 'Kolaborasi',
                value: 'Diskusi terbuka, iterasi cepat, dan dokumentasi.',
              },
              {
                title: 'Fokus',
                value: 'UX, performa, serta maintainability.',
              },
              {
                title: 'Mindset',
                value: 'Belajar terus dan solusi yang terukur.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="text-xs font-semibold tracking-widest text-muted">
                  {item.title.toUpperCase()}
                </p>
                <p className="mt-2 text-sm font-medium text-text">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.05} className="lg:col-span-5">
          <div className="card p-6">
            <p className="text-xs font-semibold tracking-widest text-muted">
              HIGHLIGHTS
            </p>
            <div className="mt-4 grid gap-3">
              {[
                'Membangun UI komponen yang reusable & scalable',
                'Mengutamakan empty states, loading, dan error handling',
                'Optimasi performa untuk pengalaman pengguna yang halus',
                'Struktur folder rapi supaya mudah develop bareng tim',
              ].map((text) => (
                <div
                  key={text}
                  className="flex gap-3 rounded-xl border border-border bg-section p-4"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary shadow-glow" />
                  <p className="text-sm leading-relaxed text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}

