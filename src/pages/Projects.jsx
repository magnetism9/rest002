import { FolderOpen } from 'lucide-react'

export default function Projects() {
  return (
    <div className="pt-16">
      <section className="theme-hero py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">포트폴리오</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">구자성 IT의 개발 실적과 납품 사례</p>
        </div>
      </section>

      <section className="py-20 theme-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 theme-section-alt">
              <FolderOpen size={36} className="theme-muted" />
            </div>
            <h2 className="font-bold text-xl mb-2 theme-heading">포트폴리오 준비 중</h2>
            <p className="text-sm theme-muted">
              2026년 5월 개업 이후 진행한 프로젝트를 이곳에서 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
