import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2 } from 'lucide-react'

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0D1B2A] shadow-lg shadow-black/30' : 'bg-[#0D1B2A]/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#1a3a8f] rounded-lg flex items-center justify-center group-hover:bg-[#2452c4] transition-colors">
              <Code2 size={20} className="text-cyan-400" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-sm">구자성 IT</div>
              <div className="text-[#94a3b8] text-[10px]">IT SOLUTION</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-[#1a3a8f] text-white'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-4 py-2 bg-[#1a3a8f] hover:bg-[#2452c4] text-white text-sm font-medium rounded-md transition-colors border border-[#2452c4]/50"
            >
              프로젝트 문의
            </Link>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-[#1a3a8f] text-white'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
