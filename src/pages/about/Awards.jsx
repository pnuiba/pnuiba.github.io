import { awardsByYear } from '../../data/awards'
import Navbar from '../../components/layout/Navbar'
import FadeIn from '../../components/ui/FadeIn'



function Awards() {
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '110px 60px 130px', maxWidth: 920, margin: '0 auto' }}>
        <FadeIn>
          <h1 style={{ fontSize: 48, fontWeight: 700, letterSpacing: 2, marginBottom: 24, textAlign: 'center' }}>AWARDS</h1>
          <p style={{ color: '#888', textAlign: 'center', lineHeight: 2, fontSize: 15, marginBottom: 64 }}>
            IBA 부원들은 각자의 관심 분야와 역량을 바탕으로 비슷한 도메인에 흥미를 가진 부원들과 팀을 이루어 다양한 대회와 공모전에 참여하였습니다.<br />
            이러한 협업과 도전의 과정을 통해 부원들은 데이터 분석, 비즈니스 전략 수립 등 실무 중심의 경험을 쌓았으며, 그 결과 여러 분야에서 다음과 같은 우수한 성과를 거두었습니다.
          </p>
        </FadeIn>

        {awardsByYear.map((group, i) => (
          <FadeIn key={group.year} delay={Math.min(i * 0.08, 0.3)}>
            <div style={{ marginBottom: 42, borderTop: i === 0 ? 'none' : '1px solid #1c1c1c', paddingTop: i === 0 ? 0 : 32 }}>
              <h2 style={{ fontSize: 21, fontWeight: 700, marginBottom: 16 }}>{group.year}</h2>
              <ul style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {group.items.map((item, j) => (
                  <li key={j} style={{ color: '#aaa', fontSize: 14.5, lineHeight: 1.7 }}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export default Awards