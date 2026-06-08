import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 theme-nav ${
        scrolled ? 'shadow-lg shadow-black/30' : 'backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors btn-primary"
            >
              <Code2 size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-sm">구자성 IT</div>
              <div className="text-[#94a3b8] text-[10px]">IT SOLUTION</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-white'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/10'
                }`}
                style={location.pathname === link.to
                  ? { backgroundColor: 'var(--c-primary)' }
                  : {}
                }
              >
                {link.label}
              </Link>
            ))}

            {/* 상담신청 버튼 */}
            <Link
              to="/contact"
              className="ml-3 px-4 py-2 text-white text-sm font-medium rounded-md transition-colors btn-primary border border-white/20"
            >
              프로젝트 문의
            </Link>

            {/* 구분선 + 테마 컨트롤 */}
            <div className="flex items-center gap-1.5 ml-3 pl-3 border-l border-white/20">
              {/* 다크/라이트 토글 */}
              <button
                onClick={toggleMode}
                title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* 컬러 팔레트 */}
              {palettes.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPaletteId(p.id)}
                  title={p.name}
                  className={`w-4 h-4 rounded-full transition-all duration-150 ${
                    paletteId === p.id
                      ? 'ring-2 ring-white ring-offset-1 ring-offset-transparent scale-125'
                      : 'hover:scale-110 opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: p.primaryLight }}
                />
              ))}
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-white'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/10'
                }`}
                style={location.pathname === link.to
                  ? { backgroundColor: 'var(--c-primary)' }
                  : {}
                }
              >
                {link.label}
              </Link>
            ))}

            {/* 모바일 테마 컨트롤 */}
            <div className="flex items-center gap-3 px-4 pt-3 border-t border-white/10 mt-2">
              <button
                onClick={toggleMode}
                className="flex items-center gap-2 text-[#94a3b8] hover:text-white text-sm transition-colors"
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
                <span>{isDark ? '라이트 모드' : '다크 모드'}</span>
              </button>
              <div className="flex items-center gap-1.5 ml-auto">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPaletteId(p.id)}
                    title={p.name}
                    className={`w-5 h-5 rounded-full transition-all ${
                      paletteId === p.id
                        ? 'ring-2 ring-white ring-offset-1 scale-110'
                        : 'opacity-60 hover:opacity-100'
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
