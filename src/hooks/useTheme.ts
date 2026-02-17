import { useEffect, useMemo, useState } from 'react'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light'

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved

  const prefersDark =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme())

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const api = useMemo(() => {
    return {
      theme,
      setTheme,
      toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
      isDark: theme === 'dark',
    }
  }, [theme])

  return api
}

