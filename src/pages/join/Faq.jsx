import { faqSections } from '../../data/faq'
import Navbar from '../../components/layout/Navbar'
import FadeIn from '../../components/ui/FadeIn'



function Faq() {
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '110px 60px 130px', maxWidth: 880, margin: '0 auto' }}>
        <FadeIn>
          <h1 style={{ fontSize: 34, marginBottom: 56 }}>FAQ</h1>
        </FadeIn>

        {faqSections.map((section, i) => (
          <FadeIn key={i} delay={Math.min(i * 0.06, 0.3)}>
            <div style={{ marginBottom: 40, borderTop: i === 0 ? 'none' : '1px solid #222', paddingTop: i === 0 ? 0 : 32 }}>
              <h3 style={{ fontSize: 19, marginBottom: 20 }}>{section.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {section.items.map((item, j) => (
                  <div key={j}>
                    <p style={{ color: '#fff', fontSize: 15.5, marginBottom: 6, fontWeight: 700 }}>Q. {item.q}</p>
                    <p style={{ color: '#aaa', fontSize: 15, lineHeight: 1.8, margin: 0 }}>A. {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}

        <p style={{ textAlign: 'center', color: '#888', fontSize: 14.5, marginTop: 56, paddingTop: 32, borderTop: '1px solid #222' }}>
          문의사항은 메일 또는 인스타그램 DM으로 연락 주시면 빠르게 답변해드립니다.
        </p>
      </div>
    </div>
  )
}

export default Faq
