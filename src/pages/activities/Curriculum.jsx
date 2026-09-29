import { curriculum } from '../../data/curriculum'
import Navbar from '../../components/layout/Navbar'



function Curriculum() {
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '110px 60px 130px', maxWidth: 880, margin: '0 auto' }}>
        <h1 style={{ fontSize: 34, marginBottom: 12 }}>EDUCATION CURRICULUM</h1>
        <p style={{ color: '#999', marginBottom: 56, fontSize: 15 }}>IBA의 신입 부원들은 다음과 같은 과정을 거쳐 융합형 인재 역량을 쌓습니다.</p>
        {curriculum.map((section, i) => (
          <div key={i} style={{ marginBottom: 40, borderTop: '1px solid #222', paddingTop: 24 }}>
            <h3 style={{ marginBottom: 12, fontSize: 17 }}>{section.title}</h3>
            <ul style={{ color: '#aaa', lineHeight: 2, fontSize: 15 }}>
              {section.items.map((item, j) => (<li key={j}>{item}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Curriculum