import { Lightbulb, Target, Heart, Rocket, Eye } from 'lucide-react'

const values = [
  { icon: Lightbulb, title: '기술력', desc: '최신 기술 트렌드를 빠르게 습득하고 고객의 문제를 기술로 해결합니다.', color: 'text-[#2452c4]', bg: 'bg-[#1a3a8f]/10' },
  { icon: Target, title: '신뢰성', desc: '정확한 일정과 품질로 고객과의 약속을 지키는 신뢰할 수 있는 파트너입니다.', color: 'text-[#166634]', bg: 'bg-[#14532d]/10' },
  { icon: Heart, title: '고객 중심', desc: '고객의 비즈니스를 깊이 이해하고 최적의 IT 솔루션을 제안합니다.', color: 'text-[#991b1b]', bg: 'bg-[#7f1d1d]/10' },
]

const history = [
  { year: '2026.05', event: '구자성 IT 창업 및 사업 개시' },
  { year: '2026.06', event: '공식 홈페이지 오픈' },
]

export default function About() {
  return (
    <div className="pt-16">
      <section className="theme-hero py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-5">회사소개</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto leading-relaxed">고객의 성공이 곧 우리의 성공입니다</p>
        </div>
      </section>

      <section className="py-24 theme-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6 theme-primary-text" style={{ backgroundColor: 'color-mix(in srgb, var(--c-primary) 15%, transparent)' }}>
                ABOUT US
              </div>
              <h2 className="text-3xl font-bold mb-6 leading-snug theme-heading">IT 토탈 솔루션<br />전문 기업</h2>
              <p className="text-base leading-loose mb-5 theme-body">
                구자성 IT는 2026년 5월 설립된 IT 전문 기업입니다. 컴퓨터 판매, 프로그램 개발, 웹개발 분야에서 고객의 비즈니스 성장을 지원하는 토탈 IT 서비스를 제공합니다.
              </p>
              <p className="text-base leading-loose theme-body">
                단순 납품이 아닌 고객의 업무 환경을 분석하고 최적의 솔루션을 제안하는 진정한 IT 파트너가 되겠습니다.
              </p>
            </div>

            <div className="rounded-2xl p-10 border theme-card">
              <h3 className="font-bold text-lg mb-7 theme-heading">회사 정보</h3>
              <dl className="divide-y" style={{ borderColor: 'var(--c-border)' }}>
                {[
                  { dt: '상호명', dd: '구자성 IT' },
                  { dt: '대표자', dd: '구자성' },
                  { dt: '개업일', dd: '2026년 5월 23일' },
                  { dt: '업종', dd: '컴퓨터 판매 · 프로그램 개발 · 웹개발' },
                  { dt: '이메일', dd: 'wkjd05@gmail.com' },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="flex gap-6 py-4">
                    <dt className="text-sm w-20 shrink-0 pt-0.5 theme-muted">{dt}</dt>
                    <dd className="text-sm font-medium leading-relaxed theme-heading">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 theme-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">미션 & 비전</h2>
            <p className="text-[#94a3b8]">우리가 나아가는 방향</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl px-10 py-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Rocket size={26} className="theme-primary-text" />
              </div>
              <div className="text-xs font-bold mb-3 tracking-widest theme-primary-text">MISSION</div>
              <h3 className="text-white font-bold text-xl mb-4">우리의 사명</h3>
              <p className="text-[#94a3b8] leading-loose text-base">
                중소기업과 소상공인이 IT 기술을 통해 경쟁력을 갖출 수 있도록 접근하기 쉽고 실용적인 IT 솔루션을 제공합니다.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-10 py-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={26} className="text-green-400" />
              </div>
              <div className="text-green-400 text-xs font-bold mb-3 tracking-widest">VISION</div>
              <h3 className="text-white font-bold text-xl mb-4">우리의 비전</h3>
              <p className="text-[#94a3b8] leading-loose text-base">
                고객이 IT 걱정 없이 본업에 집중할 수 있는 환경을 만들어, 신뢰받는 지역 최고의 IT 파트너 기업으로 성장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 theme-section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3 theme-heading">핵심 가치</h2>
            <p className="theme-muted">구자성 IT가 지키는 세 가지 원칙</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl px-8 py-9 border hover:shadow-md transition-shadow theme-card">
                <div className={`w-14 h-14 ${v.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <v.icon size={26} className={v.color} />
                </div>
                <h3 className="font-bold text-lg mb-3 theme-heading">{v.title}</h3>
                <p className="text-sm leading-loose theme-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 theme-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3 theme-heading">연혁</h2>
            <p className="theme-muted">구자성 IT의 발걸음</p>
          </div>
          <div className="max-w-xl mx-auto">
            {history.map((h, i) => (
              <div key={i} className="flex gap-8 items-start pb-10 last:pb-0 relative">
                {i < history.length - 1 && (
                  <div className="absolute left-[3.25rem] top-8 bottom-0 w-px" style={{ backgroundColor: 'var(--c-border)' }} />
                )}
                <div className="font-bold text-sm w-20 shrink-0 pt-1 text-right theme-primary-text">{h.year}</div>
                <div className="w-6 h-6 rounded-full border-4 shrink-0 mt-0.5 z-10 btn-primary" style={{ borderColor: 'color-mix(in srgb, var(--c-primary) 30%, transparent)' }} />
                <div className="flex-1 pt-0.5">
                  <p className="text-base font-medium leading-relaxed theme-heading">{h.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
