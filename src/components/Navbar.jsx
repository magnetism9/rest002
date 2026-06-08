import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faCode, faSun, faMoon, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/', label: '홈' },
  { to: '/about', label: '회사소개' },
  { to: '/services', label: '사업분야' },
  { to: '/projects', label: '포트폴리오' },
  { to: '/contact', label: '문의' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { paletteId, setPaletteId, isDark, toggleMode, palettes } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 theme-nav ${scrolled ? 'shadow-xl shadow-black/20' : 'backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center btn-primary shadow-md">
              <FontAwesomeIcon icon={faCode} className="text-white" style={{ fontSize: '15px' }} />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm tracking-wide">구자성 IT</div>
              <div className="text-[#64748b] text-[9px] tracking-widest uppercase">IT Solution</div>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'text-white'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/8'
                }`}
                style={location.pathname === link.to ? { backgroundColor: 'var(--c-primary)' } : {}}
              >
                {link.label}
              </Link>
            ))}

            <Link to="/contact" className="ml-3 px-4 py-2 text-white text-sm font-semibold rounded-xl flex items-center gap-2 btn-primary shadow-md">
              상담 신청
              <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '11px' }} />
            </Link>

            {/* 테마 컨트롤 */}
            <div className="flex items-center gap-1.5 ml-3 pl-3 border-l border-white/15">
              <button
                onClick={toggleMode}
                title={isDark ? '라이트 모드' : '다크 모드'}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/10 transition-all"
              >
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} style={{ fontSize: '14px' }} />
              </button>
              {palettes.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPaletteId(p.id)}
                  title={p.name}
                  className={`w-4 h-4 rounded-full transition-all duration-200 ${
                    paletteId === p.id
                      ? 'ring-2 ring-white ring-offset-1 ring-offset-transparent scale-125'
                      : 'opacity-60 hover:opacity-100 hover:scale-110'
                  }`}
                  style={{ backgroundColor: p.primaryLight }}
                />
              ))}
            </div>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} style={{ fontSize: '20px' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-3 pb-4 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.to
                    ? 'text-white'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/8'
                }`}
                style={location.pathname === link.to ? { backgroundColor: 'var(--c-primary)' } : {}}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-4 pt-3 border-t border-white/10 mt-2">
              <button onClick={toggleMode} className="flex items-center gap-2 text-[#94a3b8] hover:text-white text-sm transition-colors">
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} style={{ fontSize: '13px' }} />
                <span>{isDark ? '라이트 모드' : '다크 모드'}</span>
              </button>
              <div className="flex items-center gap-1.5 ml-auto">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPaletteId(p.id)}
                    title={p.name}
                    className={`w-5 h-5 rounded-full transition-all ${
                      paletteId === p.id ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: p.primaryLight }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
