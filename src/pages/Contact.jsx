import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: '전화', value: '010-0000-0000' },
  { icon: Mail, label: '이메일', value: 'wkjd05@gmail.com' },
  { icon: MapPin, label: '주소', value: '주소 추가 예정' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-16">
      <section className="theme-hero py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">문의하기</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">IT 관련 모든 문의를 환영합니다</p>
        </div>
      </section>

      <section className="py-20 theme-section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-6 theme-heading">연락처 정보</h2>
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 rounded-xl p-4 border theme-card">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'color-mix(in srgb, var(--c-primary) 15%, transparent)' }}>
                    <Icon size={18} className="theme-primary-text" />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5 theme-muted">{label}</div>
                    <div className="text-sm font-medium theme-heading">{value}</div>
                  </div>
                </div>
              ))}
              <div className="rounded-xl p-4 border mt-6" style={{ backgroundColor: 'color-mix(in srgb, var(--c-primary) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--c-primary) 20%, transparent)' }}>
                <h3 className="font-semibold text-sm mb-2 theme-heading">운영 시간</h3>
                <div className="space-y-1 text-sm theme-body">
                  <div className="flex justify-between"><span>평일</span><span>09:00 ~ 18:00</span></div>
                  <div className="flex justify-between"><span>토요일</span><span>09:00 ~ 13:00</span></div>
                  <div className="flex justify-between theme-muted"><span>일요일/공휴일</span><span>휴무</span></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-2xl border p-8 theme-card">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 bg-[#14532d]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-[#166634]" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 theme-heading">문의가 접수되었습니다</h3>
                  <p className="text-sm theme-body">빠른 시일 내에 연락드리겠습니다.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', category: '', message: '' }) }}
                    className="mt-6 px-5 py-2 border rounded-lg text-sm transition-colors theme-card theme-body"
                  >
                    새 문의 작성
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-6 theme-heading">문의 양식</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5 theme-heading">성함 <span className="text-[#991b1b]">*</span></label>
                        <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="홍길동"
                          className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors theme-card theme-body"
                          style={{ border: '1px solid var(--c-border)' }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5 theme-heading">연락처 <span className="text-[#991b1b]">*</span></label>
                        <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="010-0000-0000"
                          className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors theme-card theme-body"
                          style={{ border: '1px solid var(--c-border)' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 theme-heading">이메일</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="example@email.com"
                        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors theme-card theme-body"
                        style={{ border: '1px solid var(--c-border)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 theme-heading">문의 유형 <span className="text-[#991b1b]">*</span></label>
                      <select required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors theme-card theme-body"
                        style={{ border: '1px solid var(--c-border)' }}
                      >
                        <option value="">선택해주세요</option>
                        <option value="computer">컴퓨터 판매</option>
                        <option value="program">프로그램 개발</option>
                        <option value="web">웹개발</option>
                        <option value="other">기타 문의</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 theme-heading">문의 내용 <span className="text-[#991b1b]">*</span></label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="문의하실 내용을 자세히 적어주세요."
                        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors resize-none theme-card theme-body"
                        style={{ border: '1px solid var(--c-border)' }}
                      />
                    </div>
                    <button type="submit"
                      className="w-full py-3 text-white font-semibold rounded-lg flex items-center justify-center gap-2 btn-primary">
                      <Send size={16} /> 문의 보내기
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
