import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDesktop, faLaptopCode, faGlobe, faChevronRight, faMicrochip,
  faCalendarCheck, faHandshake, faGaugeHigh, faGem, faCommentDots,
  faCubes, faArrowRight, faCircleCheck
} from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck as farCircleCheck } from '@fortawesome/free-regular-svg-icons'

const services = [
  { icon: faDesktop,    title: '컴퓨터 판매',   desc: '개인·기업 용도에 맞는 최적의 사양을 컨설팅하고 합리적인 가격에 공급합니다.', color: 'text-[#2452c4]', bg: 'bg-[#1a3a8f]/10' },
  { icon: faLaptopCode, title: '프로그램 개발', desc: '업무 자동화, ERP, 맞춤형 소프트웨어 등 비즈니스에 필요한 프로그램을 개발합니다.', color: 'text-[#166534]', bg: 'bg-[#14532d]/10' },
  { icon: faGlobe,      title: '웹개발',        desc: '반응형 웹사이트, 쇼핑몰, 관리자 시스템 등 목적에 맞는 웹서비스를 구축합니다.', color: 'text-[#991b1b]', bg: 'bg-[#7f1d1d]/10' },
]

const techStack = [
  { name: 'React',      category: 'Frontend' },
  { name: 'Vue.js',     category: 'Frontend' },
  { name: 'Node.js',    category: 'Backend' },
  { name: 'Python',     category: 'Backend' },
  { name: 'MySQL',      category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'AWS',        category: 'Cloud' },
  { name: 'Docker',     category: 'DevOps' },
  { name: 'Windows',    category: 'System' },
  { name: 'Linux',      category: 'System' },
]

const reasons = [
  { icon: faGaugeHigh,   title: '빠른 납기',  desc: '명확한 일정 관리로 약속한 기한 내에 반드시 납품합니다.', color: 'text-[#2452c4]', bg: 'bg-[#1a3a8f]/10' },
  { icon: faGem,         title: '품질 보증',  desc: '납품 후에도 하자 보수 및 유지보수를 통해 지속적으로 품질을 보장합니다.', color: 'text-[#166534]', bg: 'bg-[#14532d]/10' },
  { icon: faCommentDots, title: '밀착 지원',  desc: '담당자가 직접 소통하여 고객의 요구사항을 정확하게 파악하고 반영합니다.', color: 'text-[#991b1b]', bg: 'bg-[#7f1d1d]/10' },
  { icon: faCubes,       title: 'IT 원스톱', desc: '컴퓨터 판매부터 개발, 웹까지 IT 전 분야를 한 곳에서 해결합니다.', color: 'text-[#2452c4]', bg: 'bg-[#1a3a8f]/10' },
]

const categoryColor = {
  Frontend: 'bg-[#1a3a8f]/12 text-[#2452c4]',
  Backend:  'bg-[#14532d]/12 text-[#166634]',
  Database: 'bg-[#7f1d1d]/12 text-[#991b1b]',
  Cloud:    'bg-purple-100 text-purple-700',
  DevOps:   'bg-amber-100 text-amber-700',
  System:   'bg-slate-100 text-slate-600',
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center hero-shimmer overflow-hidden">
        {/* 배경 오버레이 */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: 'var(--c-primary-light)' }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: 'var(--c-dot)' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--c-dot)' }} />
                <span className="text-[#94a3b8] text-xs tracking-wider">IT 전문 솔루션 기업</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                비즈니스를 성장시키는<br />
                <span className="theme-primary-text">IT 솔루션</span>{' '}파트너
              </h1>

              <p className="text-[#94a3b8] text-lg leading-loose mb-9">
                컴퓨터 판매부터 프로그램 개발, 웹개발까지<br />
                IT 전 분야를 아우르는 토탈 서비스를 제공합니다.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="px-6 py-3 text-white font-semibold rounded-xl flex items-center gap-2.5 btn-primary shadow-lg">
                  상담 신청
                  <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '12px' }} />
                </Link>
                <Link to="/services" className="px-6 py-3 btn-primary-outline font-semibold rounded-xl">
                  서비스 보기
                </Link>
              </div>

              {/* 통계 인라인 */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
                {[
                  { icon: faMicrochip,    label: 'IT 토탈 솔루션' },
                  { icon: faCalendarCheck, label: '2026년 5월 개업' },
                  { icon: faHandshake,    label: '맞춤형 서비스' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={s.icon} className="theme-primary-text opacity-80" style={{ fontSize: '14px' }} />
                    <span className="text-[#94a3b8] text-xs">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code card */}
            <div className="hidden lg:block">
              <div className="bg-black/25 border border-white/10 rounded-2xl p-7 backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-[#991b1b]/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-[#166634]/80" />
                  <span className="text-[#475569] text-xs ml-3 font-mono">solution.js</span>
                </div>
                <div className="space-y-1.5 text-[13px] leading-relaxed font-mono">
                  <p><span className="text-purple-400">const</span> <span className="text-cyan-300">client</span> <span className="text-white">=</span> <span className="text-yellow-300">new</span> <span className="text-green-400">GJSClient</span><span className="text-white">()</span></p>
                  <p className="text-[#475569]">// IT 토탈 솔루션 시작</p>
                  <p><span className="text-cyan-300">client</span><span className="text-white">.</span><span className="text-yellow-300">order</span><span className="text-white">({'{'}</span></p>
                  <p className="pl-5"><span className="text-green-300">computer</span><span className="text-white">: </span><span className="text-orange-300">'최적 사양'</span><span className="text-white">,</span></p>
                  <p className="pl-5"><span className="text-green-300">software</span><span className="text-white">: </span><span className="text-orange-300">'맞춤 개발'</span><span className="text-white">,</span></p>
                  <p className="pl-5"><span className="text-green-300">website</span><span className="text-white">: </span><span className="text-orange-300">'반응형 웹'</span><span className="text-white">,</span></p>
                  <p><span className="text-white">{'})'}</span></p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p><span className="text-green-400">✓</span> <span className="text-[#94a3b8]">빠른 납기 · 품질 보증 · 밀착 지원</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 theme-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-2 theme-heading section-title">사업분야</h2>
            <p className="mt-5 theme-muted">IT 전 분야에 걸친 전문 서비스를 제공합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map((svc) => (
              <div key={svc.title} className="p-7 rounded-2xl border aesthetic-card theme-card">
                <div className={`icon-wrap w-14 h-14 ${svc.bg} mb-6`}>
                  <FontAwesomeIcon icon={svc.icon} className={svc.color} style={{ fontSize: '24px' }} />
                </div>
                <h3 className="font-bold text-lg mb-3 theme-heading">{svc.title}</h3>
                <p className="text-sm leading-loose mb-5 theme-body">{svc.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold theme-primary-text hover:gap-3 transition-all duration-200">
                  자세히 보기
                  <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '12px' }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 theme-section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-2 theme-heading section-title">왜 구자성 IT인가</h2>
            <p className="mt-5 theme-muted">고객 만족을 최우선으로 생각합니다</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl p-6 border aesthetic-card theme-card">
                <div className={`icon-wrap w-12 h-12 ${r.bg} mb-4`}>
                  <FontAwesomeIcon icon={r.icon} className={r.color} style={{ fontSize: '20px' }} />
                </div>
                <h3 className="font-bold mb-2 theme-heading">{r.title}</h3>
                <p className="text-sm leading-loose theme-body">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 theme-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 theme-heading section-title">기술 스택</h2>
            <p className="mt-5 theme-muted">검증된 기술로 안정적인 솔루션을 구축합니다</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 border aesthetic-card theme-card">
                <span className="font-semibold text-sm theme-heading">{tech.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${categoryColor[tech.category]}`}>
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-shimmer">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">프로젝트를 시작하세요</h2>
          <p className="text-[#94a3b8] mb-9 leading-loose">IT 관련 모든 문의를 환영합니다. 무료로 상담해 드립니다.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-3.5 text-white font-semibold rounded-xl btn-primary shadow-xl">
            무료 상담 신청
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '12px' }} />
          </Link>
        </div>
      </section>
    </div>
  )
}
