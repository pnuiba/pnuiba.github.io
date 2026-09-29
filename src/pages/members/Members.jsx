import Navbar from '../../components/layout/Navbar'
import members from '../../data/members.json'

function Members() {
  const grouped = members.reduce((acc, member) => {
    const generation = member.generation || '기타'
    if (!acc[generation]) acc[generation] = []
    acc[generation].push(member)
    return acc
  }, {})
  const generations = Object.keys(grouped).sort((a, b) => (parseInt(b, 10) || -1) - (parseInt(a, 10) || -1))
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '110px 60px 130px', maxWidth: 1100, margin: '0 auto' }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, letterSpacing: 2, marginBottom: 12, textAlign: 'center' }}>IBA MEMBERS</h1>
        <p style={{ color: '#ccc', textAlign: 'center', marginBottom: 56, fontSize: 16 }}>역대 IBA 부원들을 소개합니다.</p>
        {generations.length === 0 ? (
          <p style={{ color: '#666', textAlign: 'center' }}>등록된 회원이 없습니다.</p>
        ) : generations.map((generation, i) => (
          <div key={generation} style={{ marginBottom: 48, borderTop: i === 0 ? 'none' : '1px solid #1c1c1c', paddingTop: i === 0 ? 0 : 40 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
              <span style={{ background: '#fff', color: '#111', fontWeight: 700, fontSize: 13.5, padding: '6px 18px', borderRadius: 20 }}>{generation}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 20 }}>
              {grouped[generation].map(member => (
                <div key={member.id} style={{ textAlign: 'center' }}>
                  <div style={{ color: '#ddd', fontSize: 15.5, fontWeight: 700 }}>{member.name}</div>
                  {member.department && <div style={{ color: '#888', fontSize: 12.5, marginTop: 4 }}>{member.department}</div>}
                  {member.note && <div style={{ color: '#666', fontSize: 12, marginTop: 2 }}>{member.note}</div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Members
