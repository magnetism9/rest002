import { Lightbulb, Target, Heart } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: '기술력',
    desc: '최신 기술 트렌드를 빠르게 습득하고 고객의 문제를 기술로 해결합니다.',
    color: 'text-[#2452c4]',
    bg: 'bg-[#1a3a8f]/10',
  },
  {
    icon: Target,
    title: '신뢰성',
    desc: '정확한 일정과 품질로 고객과의 약속을 지키는 신뢰할 수 있는 파트너입니다.',
    color: 'text-[#166534]',
    bg: 'bg-[#14532d]/10',
  },
  {
    icon: Heart,
    title: '고객 중심',
    desc: '고객의 비즈니스를 깊이 이해하고 최적의 IT 솔루션을 제안합니다.',
    color: 'text-[#991b1b]',
    bg: 'bg-[#7f1d1d]/10',
  },
]

const history = [
  { year: '2026.05', event: '구자성 IT 창업' },
  { year: '2026.06', event: '홈페이지 오픈' },
]

export default function About() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1a2b4a] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">회사소개</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            고객의 성공이 곧 우리의 성공입니다
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#1a3a8f]/10 text-[#2452c4] text-sm font-medium px-3 py-1 rounded-full mb-4">
                ABOUT US
              </div>
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-5">
                IT 토탈 솔루션<br />전문 기업
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                구자성 IT는 2026년 5월 설립된 IT 전문 기업입니다.
                컴퓨터 판매, 프로그램 개발, 웹개발 분야에서 고객의 비즈니스 성장을
                지원하는 토탈 IT 서비스를 제공합니다.
              </p>
              <p className="text-[#64748b] leading-relaxed">
                단순 납품이 아닌 고객의 업무 환경을 분석하고 최적의 솔루션을 제안하는
                진정한 IT 파트너가 되겠습니다.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
              <h3 className="text-[#0D1B2A] font-bold text-lg mb-6">회사 정보</h3>
              <dl className="space-y-4">
                {[
                  { dt: '상호명', dd: '구자성 IT' },
                  { dt: '대표자', dd: '구자성' },
                  { dt: '개업일', dd: '2026년 5월 23일' },
                  { dt: '업종', dd: '컴퓨터 판매 · 프로그램 개발 · 웹개발' },
                  { dt: '이메일', dd: 'wkjd05@gmail.com' },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="flex gap-4">
                    <dt className="text-[#94a3b8] text-sm w-20 shrink-0">{dt}</dt>
                    <dd className="text-[#1e293b] text-sm font-medium">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#0D1B2A] text-center mb-12">핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <v.icon size={24} className={v.color} />
                </div>
                <h3 className="font-bold text-[#0D1B2A] text-lg mb-2">{v.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#0D1B2A] text-center mb-12">연혁</h2>
          <div className="max-w-lg mx-auto space-y-4">
            {history.map((h, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-[#2452c4] font-bold text-sm w-20 shrink-0 pt-0.5">{h.year}</div>
                <div className="flex-1 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2452c4] mt-1.5 shrink-0" />
                  <p className="text-[#1e293b] text-sm">{h.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
