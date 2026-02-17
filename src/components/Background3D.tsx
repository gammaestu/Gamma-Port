import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function Background3D() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (event.clientX / innerWidth) * 2 - 1
      const y = (event.clientY / innerHeight) * 2 - 1
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [mouseX, mouseY])

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [10, -10]), {
    stiffness: 80,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-12, 12]), {
    stiffness: 80,
    damping: 20,
  })

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-bg via-bg to-bg">
      <motion.div
        style={{
          rotateX,
          rotateY,
          perspective: 1200,
        }}
        className="absolute inset-[-10%]"
      >
        {/* soft radial glows behind everything */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.18),transparent_60%)]" />

        {/* heartbeat pulse behind main hero layout (lebih ke tengah layout, bukan hanya belakang foto) */}
        <motion.div
          className="absolute left-[45%] top-[40%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/18 blur-3xl dark:bg-cyan-300/22"
          animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.35, 0.95, 0.35] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: [0.3, 0.02, 0.35, 0.98],
          }}
        />
        <motion.div
          className="absolute left-[45%] top-[40%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30"
          animate={{ scale: [0.95, 1.4, 0.95], opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: [0.3, 0.02, 0.35, 0.98],
            delay: 0.1,
          }}
        />

        {/* neon diagonal waves across the screen */}
        <motion.div
          className="absolute -left-1/4 top-10 h-32 w-[140%] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent blur-2xl"
          animate={{ y: [-10, 20, -10] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-1/4 top-1/3 h-24 w-[140%] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent blur-2xl"
          animate={{ y: [30, -10, 30] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* 3D grid plane */}
        <motion.div
          className="absolute left-1/2 top-[55%] h-[520px] w-[1200px] -translate-x-1/2 -skew-x-6 -rotate-x-12 overflow-hidden rounded-[40px] border border-primary/10 bg-gradient-to-b from-primary/10 via-bg/60 to-bg/90 shadow-[0_40px_120px_rgba(15,23,42,0.45)] dark:from-primary/15 dark:via-bg/40 dark:to-bg/80"
          animate={{ y: [20, -10, 20] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),transparent_65%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.12),transparent_55%)]" />
          {/* grid lines */}
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:40px_40px]" />
          {/* moving light band */}
          <motion.div
            className="absolute -left-1/3 top-1/3 h-40 w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-cyan-200/30"
            animate={{ x: ['-40%', '140%'] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* floating 3D cards */}
        <motion.div
          className="absolute left-[18%] top-[26%] h-40 w-64 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/25 via-bg to-bg/80 shadow-[0_30px_80px_rgba(15,23,42,0.6)]"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(248,250,252,0.9),transparent_55%)]" />
        </motion.div>

        <motion.div
          className="absolute right-[12%] top-[18%] h-32 w-32 rounded-full border border-primary/30 bg-[radial-gradient(circle,_rgba(34,211,238,0.75),rgba(59,130,246,0.65),transparent_70%)] blur-[1px]"
          animate={{ y: [10, -10, 10], x: [0, -8, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute right-[22%] top-[38%] h-24 w-40 rounded-3xl border border-primary/25 bg-gradient-to-br from-bg/80 via-primary/15 to-bg/90"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* floating particles for extra depth */}
        {Array.from({ length: 14 }).map((_, index) => (
          <motion.div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="absolute h-2 w-2 rounded-full bg-cyan-300/70 blur-[1px] dark:bg-cyan-200/80"
            style={{
              left: `${6 + (index % 7) * 13}%`,
              top: `${14 + Math.floor(index / 2) * 9}%`,
            }}
            animate={{
              y: [-18, 18, -18],
              x: [-14, 14, -14],
              opacity: [0.15, 0.85, 0.15],
            }}
            transition={{
              duration: 7 + index * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.3,
            }}
          />
        ))}

        {/* rotating ring orbit behind content */}
        <motion.div
          className="absolute left-1/2 top-[18%] h-56 w-56 -translate-x-1/2 rounded-full border border-cyan-300/40 bg-gradient-to-tr from-cyan-300/10 via-transparent to-sky-400/10"
          style={{ boxShadow: '0 0 120px rgba(56,189,248,0.35)' }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </div>
  )
}

