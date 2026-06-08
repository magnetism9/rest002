import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faLaptopCode, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const services = [
  { icon: faDesktop, title: '컴퓨터 판매', subtitle: 'Computer Sales',
    color: 'text-[#2452c4]', iconBg: 'bg-[#1a3a8f]/10', border: 'border-[#1a3a8f]/20', headerBg: 'bg-[#1a3a8f]/06',
    desc: '개인, 소상공인, 기업 등 용도와 예산에 맞는 최적의 컴퓨터 사양을 컨설팅하고 합리적인 가격으로 공급합니다.',
    items: ['데스크탑 PC 조립 및 판매', '노트북 판매 및 상담', '서버·NAS 구축', '주변기기 판매', '컴퓨터 업그레이드', 'AS 및 유지보수'] },
  { icon: faLaptopCode, title: '프로그램 개발', subtitle: 'Software Development',
    color: 'text-[#166534]', iconBg: 'bg-[#14532d]/10', border: 'border-[#14532d]/20', headerBg: 'bg-[#14532d]/06',
    desc: '업무 효율화를 위한 맞춤형 소프트웨어를 개발합니다. 요구사항 분석부터 유지보수까지 전 과정을 지원합니다.',
    items: ['업무 자동화 프로그램', 'ERP·재고관리 시스템', '데이터베이스 설계·구축', 'API 개발 및 연동', '레거시 시스템 현대화', '유지보수 및 기능 개선'] },
  { icon: faGlobe, title: '웹개발', subtitle: 'Web Development',
    color: 'text-[#991b1b]', iconBg: 'bg-[#7f1d1d]/10', border: 'border-[#7f1d1d]/20', headerBg: 'bg-[#7f1d1d]/06',
    desc: '기업 홈페이지, 쇼핑몰, 관리자 시스템 등 목적에 맞는 웹서비스를 기획부터 운영까지 구축합니다.',
    items: ['기업 홈페이지 제작', '쇼핑몰·이커머스 구축', '관리자(Admin) 시스템', '반응형 웹 디자인', 'SEO 최적화', '웹 호스팅 및 운영 지원'] },
]

export default function Services() {
  return (
    <div className="pt-16">
      <section className="hero-shimmer py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-5 tracking-tight">사업분야</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto leading-relaxed">IT 전 분야 원스톱 토탈 서비스</p>
        </div>
      </section>

      <section className="py-24 theme-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {services.map((svc) => (
            <div key={svc.title} className={`rounded-2xl border ${svc.border} overflow-hidden shadow-sm aesthetic-card theme-card`}>
              <div className={`${svc.headerBg} px-10 py-10`}>
                <div className="flex items-start gap-7">
                  <div className={`icon-wrap w-16 h-16 ${svc.iconBg} shrink-0 mt-1 theme-card shadow-sm`}>
                    <FontAwesomeIcon icon={svc.icon} className={svc.color} style={{ fontSize: '28px' }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold tracking-widest uppercase mb-2 theme-muted">{svc.subtitle}</div>
                    <h2 className="text-2xl font-bold mb-4 tracking-tight theme-heading">{svc.title}</h2>
                    <p className="text-base leading-loose max-w-2xl theme-body">{svc.desc}</p>
                  </div>
                </div>
              </div>
              <div className="px-10 py-10">
                <h3 className="text-xs font-bold mb-6 tracking-widest uppercase theme-muted">제공 서비스</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                  {svc.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 py-1">
                      <FontAwesomeIcon icon={faCircleCheck} className={`${svc.color} shrink-0`} style={{ fontSize: '16px' }} />
                      <span className="text-sm leading-relaxed theme-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 theme-section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-2 theme-heading section-title tracking-tight">진행 프로세스</h2>
            <p className="mt-5 theme-muted">처음 상담부터 사후 지원까지 함께합니다</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { step: '01', title: '상담', desc: '요구사항 및 예산을 꼼꼼히 파악합니다' },
              { step: '02', title: '제안', desc: '최적 솔루션과 견적을 제안드립니다' },
              { step: '03', title: '개발·납품', desc: '일정에 맞춰 개발하고 납품합니다' },
              { step: '04', title: 'A/S', desc: '납품 후에도 지속적으로 지원합니다' },
            ].map((p) => (
              <div key={p.step} className="rounded-2xl px-6 py-8 border text-center aesthetic-card theme-card">
                <div className="text-4xl font-black mb-3 tracking-tighter theme-primary-text opacity-25">{p.step}</div>
                <h3 className="font-bold text-base mb-3 theme-heading">{p.title}</h3>
                <p className="text-sm leading-relaxed theme-body">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
