import { Lightbulb, Target, Heart, Rocket, Eye } from 'lucide-react'

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
    color: 'text-[#166634]',
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
  { year: '2026.05', event: '구자성 IT 창업 및 사업 개시' },
  { year: '2026.06', event: '공식 홈페이지 오픈' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1a2b4a] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-5">회사소개</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto leading-relaxed">
            고객의 성공이 곧 우리의 성공입니다
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block bg-[#1a3a8f]/10 text-[#2452c4] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                ABOUT US
              </div>
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-6 leading-snug">
                IT 토탈 솔루션<br />전문 기업
              </h2>
              <p className="text-[#4b5563] text-base leading-loose mb-5">
                구자성 IT는 2026년 5월 설립된 IT 전문 기업입니다.
                컴퓨터 판매, 프로그램 개발, 웹개발 분야에서 고객의 비즈니스 성장을
                지원하는 토탈 IT 서비스를 제공합니다.
              </p>
              <p className="text-[#4b5563] text-base leading-loose">
                단순 납품이 아닌 고객의 업무 환경을 분석하고 최적의 솔루션을 제안하는
                진정한 IT 파트너가 되겠습니다.
              </p>
            </div>

            {/* 회사 정보 카드 */}
            <div className="bg-[#f8fafc] rounded-2xl p-10 border border-[#e2e8f0]">
              <h3 className="text-[#0D1B2A] font-bold text-lg mb-7">회사 정보</h3>
              <dl className="divide-y divide-[#e2e8f0]">
                {[
                  { dt: '상호명', dd: '구자성 IT' },
                  { dt: '대표자', dd: '구자성' },
                  { dt: '개업일', dd: '2026년 5월 23일' },
                  { dt: '업종', dd: '컴퓨터 판매 · 프로그램 개발 · 웹개발' },
                  { dt: '이메일', dd: 'wkjd05@gmail.com' },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="flex gap-6 py-4">
                    <dt className="text-[#94a3b8] text-sm w-20 shrink-0 pt-0.5">{dt}</dt>
                    <dd className="text-[#1e293b] text-sm font-medium leading-relaxed">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-[#0D1B2A] to-[#1a2b4a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">미션 & 비전</h2>
            <p className="text-[#94a3b8]">우리가 나아가는 방향</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl px-10 py-10">
              <div className="w-14 h-14 bg-[#2452c4]/20 rounded-2xl flex items-center justify-center mb-6">
                <Rocket size={26} className="text-cyan-400" />
              </div>
              <div className="text-cyan-400 text-xs font-bold mb-3 tracking-widest">MISSION</div>
              <h3 className="text-white font-bold text-xl mb-4">우리의 사명</h3>
              <p className="text-[#94a3b8] leading-loose text-base">
                중소기업과 소상공인이 IT 기술을 통해 경쟁력을 갖출 수 있도록
                접근하기 쉽고 실용적인 IT 솔루션을 제공합니다.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-10 py-10">
              <div className="w-14 h-14 bg-[#166634]/30 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={26} className="text-green-400" />
              </div>
              <div className="text-green-400 text-xs font-bold mb-3 tracking-widest">VISION</div>
              <h3 className="text-white font-bold text-xl mb-4">우리의 비전</h3>
              <p className="text-[#94a3b8] leading-loose text-base">
                고객이 IT 걱정 없이 본업에 집중할 수 있는 환경을 만들어,
                신뢰받는 지역 최고의 IT 파트너 기업으로 성장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3">핵심 가치</h2>
            <p className="text-[#64748b]">구자성 IT가 지키는 세 가지 원칙</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl px-8 py-9 border border-[#e2e8f0] hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 ${v.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <v.icon size={26} className={v.color} />
                </div>
                <h3 className="font-bold text-[#0D1B2A] text-lg mb-3">{v.title}</h3>
                <p className="text-[#4b5563] text-sm leading-loose">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3">연혁</h2>
            <p className="text-[#64748b]">구자성 IT의 발걸음</p>
          </div>
          <div className="max-w-xl mx-auto">
            {history.map((h, i) => (
              <div key={i} className="flex gap-8 items-start pb-10 last:pb-0 relative">
                {/* 세로선 */}
                {i < history.length - 1 && (
                  <div className="absolute left-[3.25rem] top-8 bottom-0 w-px bg-[#e2e8f0]" />
                )}
                <div className="text-[#2452c4] font-bold text-sm w-20 shrink-0 pt-1 text-right">{h.year}</div>
                <div className="w-6 h-6 rounded-full bg-[#1a3a8f] border-4 border-[#dbeafe] shrink-0 mt-0.5 z-10" />
                <div className="flex-1 pt-0.5">
                  <p className="text-[#1e293b] text-base font-medium leading-relaxed">{h.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
