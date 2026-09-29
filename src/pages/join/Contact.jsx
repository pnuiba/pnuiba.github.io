import Navbar from '../../components/layout/Navbar'
import FadeIn from '../../components/ui/FadeIn'

function Contact() {
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <Navbar />

      <FadeIn>
        <section style={{ padding: '110px 60px 0', maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 34, marginBottom: 24 }}>CONTACT</h2>
          <p style={{ color: '#ccc', fontWeight: 700, fontSize: 15.5, lineHeight: 1.9, marginBottom: 36 }}>
            방문에 감사드리며,
            <br />
            프로젝트 제안 및 추가 문의사항은 아래로 연락 부탁드립니다.
          </p>
          <p style={{ color: '#aaa', lineHeight: 2.2, marginBottom: 32, fontSize: 15.5 }}>
            메일: pnuiba514@gmail.com
            <br />
            인스타그램: @pnu_iba
            <br />
            연락처: 010-6485-3549
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 56, flexWrap: 'wrap' }}>
            <a href="tel:01064853549" style={quickButtonStyle}>전화 걸기</a>
            <a href="mailto:pnuiba514@gmail.com" style={quickButtonStyle}>메일 발송</a>
            <a href="sms:01064853549" style={quickButtonStyle}>문자 발송</a>
          </div>
        </section>
      </FadeIn>


    </div>
  )
}

const quickButtonStyle = { background: '#1c1c1c', border: '1px solid #333', borderRadius: 8, padding: '10px 20px', color: '#ccc', textDecoration: 'none', fontSize: 14, fontWeight: 700 }

export default Contact
