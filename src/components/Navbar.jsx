import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faCode, faSun, faMoon, faChevronRight, faChevronDown, faPalette } from '@fortawesome/free-solid-svg-icons'
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
  const [paletteOpen, setPaletteOpen] = useState(false)
  const paletteRef = useRef(null)
  const location = useLocation()
  const { paletteId, setPaletteId, isDark, toggleMode, palettes } = useTheme()

  useEffect(() => {
    const handler = (e) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target)) setPaletteOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

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
              프로젝트 문의
              <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '11px' }} />
            </Link>

            {/* 테마 컨트롤 */}
            <div className="flex items-center gap-2 ml-3 pl-3 border-l border-white/15">

              {/* 다크/라이트 토글 */}
              <button
                onClick={toggleMode}
                title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/10 transition-all"
              >
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} style={{ fontSize: '14px' }} />
              </button>

              {/* 컬러 팔레트 드롭다운 */}
              <div className="relative" ref={paletteRef}>
                <button
                  onClick={() => setPaletteOpen(v => !v)}
                  title="컬러 팔레트 변경"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/10 transition-all text-xs font-medium"
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: palettes.find(p => p.id === paletteId)?.primaryLight }}
                  />
                  <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '9px' }} />
                </button>

                {paletteOpen && (
                  <div className="absolute right-0 top-full mt-2 w-36 rounded-xl shadow-2xl z-50 overflow-hidden"
                       style={{ background: 'var(--c-bg-nav)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="px-3 pt-2.5 pb-1 text-[10px] font-bold uppercase tracking-widest text-[#64748b]">팔레트</p>
                    {palettes.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => { setPaletteId(p.id); setPaletteOpen(false) }}
                        className="flex items-center gap-2.5 w-full px-3 py-2 text-sm transition-all hover:bg-white/8"
                        style={{ color: paletteId === p.id ? 'white' : '#94a3b8', fontWeight: paletteId === p.id ? 600 : 400 }}
                      >
                        <span className="w-4 h-4 rounded-full flex-shrink-0 ring-1 ring-white/20"
                              style={{ backgroundColor: p.primaryLight }} />
                        {p.name}
                        {paletteId === p.id && (
                          <span className="ml-auto text-white opacity-80" style={{ fontSize: '10px' }}>✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
