import { MotionConfig } from 'framer-motion'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { LogoMark } from './components/LogoMark'
import { Background3D } from './components/Background3D'
import { useTheme } from './hooks/useTheme'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { SkillsPage } from './pages/SkillsPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { ProjectsPage } from './pages/ProjectsPage'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <HashRouter>
      <MotionConfig reducedMotion="never">
        <div className="relative min-h-dvh bg-bg text-text">
          <Background3D />
          <div className="relative z-10">
            <Navbar theme={theme} onToggleTheme={toggle} />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>

            <footer className="border-t border-border bg-bg/80 backdrop-blur">
              <div className="container-page py-10">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <LogoMark size={28} />
                    <p className="text-sm text-muted">
                      © {new Date().getFullYear()} Gamma Estu Mahardika — Portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </MotionConfig>
    </HashRouter>
  )
}

export default App
