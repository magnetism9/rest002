import { Monitor, Code, Globe, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: '컴퓨터 판매',
    subtitle: 'Computer Sales',
    color: 'text-[#2452c4]',
    bg: 'bg-[#1a3a8f]/10',
    border: 'border-[#1a3a8f]/20',
    desc: '개인, 소상공인, 기업 등 용도와 예산에 맞는 최적의 컴퓨터 사양을 컨설팅하고 합리적인 가격으로 공급합니다.',
    items: [
      '데스크탑 PC 조립 및 판매',
      '노트북 판매 및 상담',
      '서버·NAS 구축',
      '주변기기 판매',
      '컴퓨터 업그레이드',
      'AS 및 유지보수',
    ],
  },
  {
    icon: Code,
    title: '프로그램 개발',
    subtitle: 'Software Development',
    color: 'text-[#166534]',
    bg: 'bg-[#14532d]/10',
    border: 'border-[#14532d]/20',
    desc: '업무 효율화를 위한 맞춤형 소프트웨어를 개발합니다. 요구사항 분석부터 유지보수까지 전 과정을 지원합니다.',
    items: [
      '업무 자동화 프로그램',
      'ERP·재고관리 시스템',
      '데이터베이스 설계·구축',
      'API 개발 및 연동',
      '레거시 시스템 현대화',
      '유지보수 및 기능 개선',
    ],
  },
  {
    icon: Globe,
    title: '웹개발',
    subtitle: 'Web Development',
    color: 'text-[#991b1b]',
    bg: 'bg-[#7f1d1d]/10',
    border: 'border-[#7f1d1d]/20',
    desc: '기업 홈페이지, 쇼핑몰, 관리자 시스템 등 목적에 맞는 웹서비스를 기획부터 운영까지 구축합니다.',
    items: [
      '기업 홈페이지 제작',
      '쇼핑몰·이커머스 구축',
      '관리자(Admin) 시스템',
      '반응형 웹 디자인',
      'SEO 최적화',
      '웹 호스팅 및 운영 지원',
    ],
  },
]

export default function Services() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1a2b4a] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">사업분야</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            IT 전 분야 원스톱 토탈 서비스
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          {services.map((svc) => (
            <div key={svc.title} className={`rounded-2xl border ${svc.border} overflow-hidden`}>
              <div className={`${svc.bg} p-8`}>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <svc.icon size={28} className={svc.color} />
                  </div>
                  <div>
                    <div className="text-[#94a3b8] text-xs font-medium mb-1">{svc.subtitle}</div>
                    <h2 className="text-2xl font-bold text-[#0D1B2A] mb-2">{svc.title}</h2>
                    <p className="text-[#64748b] text-sm leading-relaxed max-w-2xl">{svc.desc}</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-[#0D1B2A] font-semibold mb-4 text-sm">제공 서비스</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {svc.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className={svc.color} />
                      <span className="text-[#1e293b] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#0D1B2A] text-center mb-12">진행 프로세스</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: '상담', desc: '요구사항 및 예산 파악' },
              { step: '02', title: '제안', desc: '최적 솔루션 및 견적 제안' },
              { step: '03', title: '개발·납품', desc: '일정에 맞는 개발 및 납품' },
              { step: '04', title: 'A/S', desc: '사후 지원 및 유지보수' },
            ].map((p) => (
              <div key={p.step} className="bg-white rounded-xl p-5 border border-[#e2e8f0] text-center">
                <div className="text-3xl font-bold text-[#1a3a8f]/20 mb-2">{p.step}</div>
                <h3 className="font-bold text-[#0D1B2A] mb-1">{p.title}</h3>
                <p className="text-[#64748b] text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
