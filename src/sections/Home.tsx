import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PROFILE } from '../data/profile'

export function HomeSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* background glow with subtle movement */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
          animate={{ x: [-10, 10, -8], y: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-4rem] right-[-2rem] h-72 w-72 rounded-full bg-primary/16 blur-3xl"
          animate={{ x: [0, -16, 0], y: [0, -12, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-page relative py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold tracking-widest text-muted shadow-soft"
            >
              <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
              AVAILABLE FOR WORK
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl"
            >
              {PROFILE.name}
              <span className="block text-primary">{PROFILE.role}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                Lihat Project
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-text shadow-soft transition hover:-translate-y-0.5 hover:bg-section focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                Tentang Saya
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.24 }}
              className="mt-7 flex flex-wrap items-center gap-3 text-sm text-muted"
            >
              <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {PROFILE.location}
              </span>
              {PROFILE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-xl border border-border bg-card px-4 py-2 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-section hover:text-text focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
              className="card relative overflow-hidden p-6 sm:p-7"
            >
              <motion.div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
                animate={{ x: [0, -12, 0], y: [0, 8, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative flex flex-col items-center gap-6 text-center">
                <motion.div
                  className="relative h-32 w-32 shrink-0 rounded-full border border-primary/40 bg-gradient-to-br from-primary/30 via-bg to-primary/10 p-1 shadow-glow sm:h-40 sm:w-40"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-section">
                    {PROFILE.photo ? (
                      <img
                        src={PROFILE.photo}
                        alt={PROFILE.name}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-muted">
                        Foto kamu di sini
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                </motion.div>

                <div className="relative mt-1 space-y-3">
                  <p className="text-xs font-semibold tracking-widest text-muted">
                    SOFTWARE ENGINEER • RPL STUDENT
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    Fokus di pengembangan sistem web & mobile dengan pengalaman membangun
                    Signix, UPA Kerja Sama, dan beberapa proyek kampus lainnya.
                  </p>
                  <div className="grid gap-2 text-xs sm:text-sm">
                    <div className="rounded-xl border border-border bg-section px-4 py-2.5">
                      <p className="text-[0.7rem] font-semibold tracking-widest text-muted">
                        KEAHLIAN
                      </p>
                      <p className="mt-1 font-medium text-text">
                        Laravel • PHP • React • MySQL
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-section px-4 py-2.5">
                      <p className="text-[0.7rem] font-semibold tracking-widest text-muted">
                        FOKUS
                      </p>
                      <p className="mt-1 font-medium text-text">
                        Web app yang rapi, cepat, dan terukur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

