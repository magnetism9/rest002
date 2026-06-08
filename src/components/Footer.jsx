import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPhone, faEnvelope, faLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="theme-footer text-[#64748b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center btn-primary shadow-md">
                <FontAwesomeIcon icon={faCode} className="text-white" style={{ fontSize: '15px' }} />
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-wide">구자성 IT</div>
                <div className="text-[#475569] text-[9px] tracking-widest uppercase">IT Solution</div>
              </div>
            </div>
            <p className="text-sm leading-loose">
              컴퓨터 판매부터 프로그램 개발,<br />
              웹개발까지 IT 전 분야 토탈 서비스를<br />
              제공합니다.
            </p>
            <div className="mt-5 text-xs text-[#334155]">개업일 · 2026년 5월 23일</div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">바로가기</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: '/about', label: '회사소개' },
                { to: '/services', label: '사업분야' },
                { to: '/projects', label: '포트폴리오' },
                { to: '/contact', label: '문의하기' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">연락처</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="theme-primary-text shrink-0" style={{ fontSize: '13px' }} />
                <span>010-0000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="theme-primary-text shrink-0" style={{ fontSize: '13px' }} />
                <span>wkjd05@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="theme-primary-text shrink-0 mt-0.5" style={{ fontSize: '13px' }} />
                <span>주소 추가 예정</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#334155]">
          <p>© 2026 구자성 IT. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with
            <FontAwesomeIcon icon={faHeart} className="text-[#991b1b]" style={{ fontSize: '11px' }} />
            구자성 IT
          </p>
        </div>
      </div>
    </footer>
  )
}
