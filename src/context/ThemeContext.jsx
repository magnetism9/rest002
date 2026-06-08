import { createContext, useContext, useState, useEffect, useCallback } from 'react'

export const palettes = [
  { id: 'blue',   name: '블루',   bgDark: '#0D1B2A', bgNav: '#1a2b4a', primary: '#1a3a8f', primaryLight: '#2452c4', dot: '#22d3ee' },
  { id: 'purple', name: '퍼플',   bgDark: '#150b2e', bgNav: '#1e1040', primary: '#5b21b6', primaryLight: '#7c3aed', dot: '#a78bfa' },
  { id: 'green',  name: '그린',   bgDark: '#052e16', bgNav: '#0f3b1e', primary: '#166534', primaryLight: '#16a34a', dot: '#4ade80' },
  { id: 'sky',    name: '스카이',  bgDark: '#0c1a2e', bgNav: '#0f2d4a', primary: '#0369a1', primaryLight: '#0ea5e9', dot: '#38bdf8' },
  { id: 'red',    name: '레드',   bgDark: '#1a0808', bgNav: '#2d1010', primary: '#991b1b', primaryLight: '#dc2626', dot: '#f87171' },
]

function applyVars(palette, isDark) {
  const r = document.documentElement.style
  r.setProperty('--c-bg-dark', palette.bgDark)
  r.setProperty('--c-bg-nav', palette.bgNav)
  r.setProperty('--c-primary', palette.primary)
  r.setProperty('--c-primary-light', palette.primaryLight)
  r.setProperty('--c-dot', palette.dot)
  if (isDark) {
    r.setProperty('--c-page', '#0b1728')
    r.setProperty('--c-section', '#132033')
    r.setProperty('--c-section-alt', '#0b1728')
    r.setProperty('--c-heading', '#f1f5f9')
    r.setProperty('--c-body', '#cbd5e1')
    r.setProperty('--c-muted', '#64748b')
    r.setProperty('--c-border', '#1e3a5f')
    r.setProperty('--c-card', '#132033')
  } else {
    r.setProperty('--c-page', '#f8fafc')
    r.setProperty('--c-section', '#ffffff')
    r.setProperty('--c-section-alt', '#f8fafc')
    r.setProperty('--c-heading', '#0D1B2A')
    r.setProperty('--c-body', '#4b5563')
    r.setProperty('--c-muted', '#94a3b8')
    r.setProperty('--c-border', '#e2e8f0')
    r.setProperty('--c-card', '#ffffff')
  }
}

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [paletteId, setPaletteIdState] = useState(
    () => localStorage.getItem('gjs-palette') || 'blue'
  )
  const [isDark, setIsDarkState] = useState(
    () => localStorage.getItem('gjs-dark') === 'true'
  )

  const palette = palettes.find(p => p.id === paletteId) || palettes[0]

  useEffect(() => {
    applyVars(palette, isDark)
  }, [palette, isDark])

  const setPaletteId = useCallback((id) => {
    setPaletteIdState(id)
    localStorage.setItem('gjs-palette', id)
  }, [])

  const toggleMode = useCallback(() => {
    setIsDarkState(prev => {
      const next = !prev
      localStorage.setItem('gjs-dark', String(next))
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ paletteId, setPaletteId, isDark, toggleMode, palette, palettes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
