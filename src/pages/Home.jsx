import { Link } from 'react-router-dom'
import { Monitor, Code, Globe, ChevronRight, Cpu, Layers, Users, Zap, ShieldCheck, Headphones, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: '컴퓨터 판매',
    desc: '개인·기업 용도에 맞는 최적의 사양을 컨설팅하고 합리적인 가격에 공급합니다.',
    color: 'text-[#2452c4]',
    bg: 'bg-[#1a3a8f]/10',
    link: '/services',
  },
  {
    icon: Code,
    title: '프로그램 개발',
    desc: '업무 자동화, ERP, 맞춤형 소프트웨어 등 비즈니스에 필요한 프로그램을 개발합니다.',
    color: 'text-[#166534]',
    bg: 'bg-[#14532d]/10',
    link: '/services',
  },
  {
    icon: Globe,
    title: '웹개발',
    desc: '반응형 웹사이트, 쇼핑몰, 관리자 시스템 등 목적에 맞는 웹서비스를 구축합니다.',
    color: 'text-[#991b1b]',
    bg: 'bg-[#7f1d1d]/10',
    link: '/services',
  },
]

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Windows', category: 'System' },
  { name: 'Linux', category: 'System' },
]

const reasons = [
  {
    icon: Zap,
    title: '빠른 납기',
    desc: '명확한 일정 관리로 약속한 기한 내에 반드시 납품합니다.',
    color: 'text-[#2452c4]',
    bg: 'bg-[#1a3a8f]/10',
  },
  {
    icon: ShieldCheck,
    title: '품질 보증',
    desc: '납품 후에도 하자 보수 및 유지보수를 통해 지속적으로 품질을 보장합니다.',
    color: 'text-[#166534]',
    bg: 'bg-[#14532d]/10',
  },
  {
    icon: Headphones,
    title: '밀착 지원',
    desc: '담당자가 직접 소통하여 고객의 요구사항을 정확하게 파악하고 반영합니다.',
    color: 'text-[#991b1b]',
    bg: 'bg-[#7f1d1d]/10',
  },
  {
    icon: Cpu,
    title: 'IT 원스톱',
    desc: '컴퓨터 판매부터 개발, 웹까지 IT 전 분야를 한 곳에서 해결합니다.',
    color: 'text-[#2452c4]',
    bg: 'bg-[#1a3a8f]/10',
  },
]

const categoryColor = {
  Frontend: 'bg-[#1a3a8f]/15 text-[#2452c4]',
  Backend: 'bg-[#14532d]/15 text-[#166634]',
  Database: 'bg-[#7f1d1d]/15 text-[#991b1b]',
  Cloud: 'bg-purple-100 text-purple-700',
  DevOps: 'bg-orange-100 text-orange-700',
  System: 'bg-slate-100 text-slate-600',
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0D1B2A] via-[#1a2b4a] to-[#0D1B2A] overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `radial-gradient(ellipse at 20% 40%, #2452c4 0%, transparent 55%),
                            radial-gradient(ellipse at 80% 60%, #166634 0%, transparent 55%)`,
        }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1a3a8f]/30 border border-[#2452c4]/30 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[#94a3b8] text-sm">IT 전문 솔루션 기업</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                비즈니스를 성장시키는<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2452c4] to-cyan-400">
                  IT 솔루션
                </span>{' '}
                파트너
              </h1>

              <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
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

            {/* Hero visual — code card */}
            <div className="hidden lg:block">
              <div className="bg-[#0D1B2A]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#991b1b]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-[#166634]" />
                  <span className="text-[#475569] text-xs ml-2">solution.js</span>
                </div>
                <div className="space-y-1.5 text-[13px] leading-relaxed">
                  <p><span className="text-purple-400">const</span> <span className="text-cyan-300">client</span> <span className="text-white">=</span> <span className="text-yellow-300">new</span> <span className="text-green-400">GJSClient</span><span className="text-white">()</span></p>
                  <p className="text-[#475569]">// IT 토탈 솔루션 시작</p>
                  <p><span className="text-cyan-300">client</span><span className="text-white">.</span><span className="text-yellow-300">order</span><span className="text-white">({'{'}</span></p>
                  <p className="pl-4"><span className="text-green-300">computer</span><span className="text-white">: </span><span className="text-orange-300">'최적 사양'</span><span className="text-white">,</span></p>
                  <p className="pl-4"><span className="text-green-300">software</span><span className="text-white">: </span><span className="text-orange-300">'맞춤 개발'</span><span className="text-white">,</span></p>
                  <p className="pl-4"><span className="text-green-300">website</span><span className="text-white">: </span><span className="text-orange-300">'반응형 웹'</span><span className="text-white">,</span></p>
                  <p><span className="text-white">{'})'}</span></p>
                  <p className="text-[#475569]">// → 비즈니스 성장 🚀</p>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p><span className="text-green-400">✓</span> <span className="text-[#94a3b8]">빠른 납기 · 품질 보증 · 밀착 지원</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1a2b4a] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { icon: Cpu, value: 'IT 토탈', label: '원스톱 솔루션' },
              { icon: Layers, value: '2026.05', label: '사업 개시' },
              { icon: Users, value: '맞춤형', label: '고객 중심 서비스' },
            ].map((s) => (
              <div key={s.label}>
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
              <div key={svc.title} className="p-6 rounded-xl border border-[#e2e8f0] hover:border-[#2452c4]/30 hover:shadow-lg transition-all group cursor-pointer">
                <div className={`w-12 h-12 ${svc.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svc.icon size={24} className={svc.color} />
                </div>
                <h3 className="text-[#0D1B2A] font-bold text-lg mb-2">{svc.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-4">{svc.desc}</p>
                <Link to={svc.link} className="inline-flex items-center gap-1 text-[#2452c4] text-sm font-medium hover:gap-2 transition-all">
                  자세히 보기 <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3">왜 구자성 IT인가</h2>
            <p className="text-[#64748b]">고객 만족을 최우선으로 생각합니다</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-5 border border-[#e2e8f0] hover:shadow-md transition-shadow">
                <div className={`w-11 h-11 ${r.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <r.icon size={22} className={r.color} />
                </div>
                <h3 className="font-bold text-[#0D1B2A] mb-1.5">{r.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3">기술 스택</h2>
            <p className="text-[#64748b]">검증된 기술로 안정적인 솔루션을 구축합니다</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-4 py-2 hover:border-[#2452c4]/30 transition-colors">
                <span className="text-[#1e293b] font-medium text-sm">{tech.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${categoryColor[tech.category]}`}>
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0D1B2A] to-[#1a2b4a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">프로젝트를 시작하세요</h2>
          <p className="text-[#94a3b8] mb-8">IT 관련 모든 문의를 환영합니다. 무료로 상담해 드립니다.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a3a8f] hover:bg-[#2452c4] text-white font-semibold rounded-lg transition-colors">
            무료 상담 문의 <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
