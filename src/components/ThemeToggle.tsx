import { motion } from 'framer-motion'
import type { ThemeMode } from '../hooks/useTheme'

type Props = {
  theme: ThemeMode
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm text-text shadow-soft transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-section focus:outline-none focus:ring-2 focus:ring-primary/40"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 26 }}
        className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white shadow-glow"
      >
        {isDark ? (
          // moon icon
          <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true">
            <path
              d="M20 14.5A7.5 7.5 0 0 1 11.5 6 6.5 6.5 0 1 0 20 14.5Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          // sun icon
          <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true">
            <circle cx="12" cy="12" r="3.5" fill="currentColor" />
            <path
              d="M12 3v2.2M12 18.8V21M4.7 4.7 6.25 6.25M17.75 17.75 19.3 19.3M3 12h2.2M18.8 12H21M4.7 19.3 6.25 17.75M17.75 6.25 19.3 4.7"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        )}
      </motion.span>
      <span className="font-medium text-muted group-hover:text-text">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}

