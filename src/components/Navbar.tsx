import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { LogoMark } from './LogoMark'
import type { ThemeMode } from '../hooks/useTheme'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
] as const

type Props = {
  theme: ThemeMode
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <div className="container-page py-3">
        <div className="flex items-center justify-between gap-3">
          <NavLink
            to="/"
            className="group inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold tracking-tight text-text hover:bg-section focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <LogoMark size={32} showText />
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'relative rounded-xl px-3 py-2 text-sm font-medium transition',
                    'hover:bg-section focus:outline-none focus:ring-2 focus:ring-primary/40',
                    isActive ? 'text-text' : 'text-muted',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    ) : null}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>

        {/* Mobile quick nav */}
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'shrink-0 rounded-xl border px-3 py-2 text-xs font-semibold',
                  'transition hover:-translate-y-0.5 hover:bg-section',
                  isActive
                    ? 'border-primary/50 bg-section text-text'
                    : 'border-border bg-card text-muted',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

