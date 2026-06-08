import { Link } from 'react-router-dom'
import { Monitor, Code, Globe, ChevronRight, Cpu, Layers, Users } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: '컴퓨터 판매',
    desc: '개인용 PC부터 기업 서버까지, 최적의 사양을 컨설팅하고 합리적인 가격에 공급합니다.',
    color: 'text-[#2452c4]',
    bg: 'bg-[#1a3a8f]/10',
  },
  {
    icon: Code,
    title: '프로그램 개발',
    desc: '업무 자동화, ERP, 맞춤형 소프트웨어 등 비즈니스에 필요한 프로그램을 개발합니다.',
    color: 'text-[#166534]',
    bg: 'bg-[#14532d]/10',
  },
  {
    icon: Globe,
    title: '웹개발',
    desc: '반응형 웹사이트, 쇼핑몰, 관리자 시스템 등 목적에 맞는 웹서비스를 구축합니다.',
    color: 'text-[#991b1b]',
    bg: 'bg-[#7f1d1d]/10',
  },
]

const stats = [
  { icon: Cpu, value: 'IT 토탈', label: '원스톱 솔루션' },
  { icon: Layers, value: '2026.05', label: '사업 개시' },
  { icon: Users, value: '맞춤형', label: '고객 중심 서비스' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0D1B2A] via-[#1a2b4a] to-[#0D1B2A] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #2452c4 0%, transparent 50%),
                              radial-gradient(circle at 80% 70%, #1a3a8f 0%, transparent 50%)`,
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1a3a8f]/30 border border-[#2452c4]/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[#94a3b8] text-sm">IT 전문 솔루션 기업</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              비즈니스를 성장시키는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2452c4] to-cyan-400">
                IT 솔루션
              </span>{' '}
              파트너
            </h1>

            <p className="text-[#94a3b8] text-lg leading-relaxed mb-8 max-w-xl">
              컴퓨터 판매부터 프로그램 개발, 웹개발까지<br />
              IT 전 분야를 아우르는 토탈 서비스를 제공합니다.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-[#1a3a8f] hover:bg-[#2452c4] text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                프로젝트 문의 <ChevronRight size={18} />
              </Link>
              <Link to="/services" className="px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
                서비스 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1a2b4a] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon size={24} className="text-[#2452c4] mx-auto mb-2" />
                <div className="text-white font-bold text-lg">{s.value}</div>
                <div className="text-[#94a3b8] text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3">사업분야</h2>
            <p className="text-[#64748b]">IT 전 분야에 걸친 전문 서비스를 제공합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="p-6 rounded-xl border border-[#e2e8f0] hover:border-[#2452c4]/30 hover:shadow-lg transition-all group">
                <div className={`w-12 h-12 ${svc.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svc.icon size={24} className={svc.color} />
                </div>
                <h3 className="text-[#0D1B2A] font-bold text-lg mb-2">{svc.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{svc.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-[#2452c4] text-sm font-medium mt-4 hover:gap-2 transition-all">
                  자세히 보기 <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0D1B2A] to-[#1a2b4a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">프로젝트를 시작하세요</h2>
          <p className="text-[#94a3b8] mb-8">IT 관련 모든 문의를 환영합니다</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a3a8f] hover:bg-[#2452c4] text-white font-semibold rounded-lg transition-colors">
            무료 상담 문의 <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
