import { photos } from '../../data/activities'
import { useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import FadeIn from '../../components/ui/FadeIn'



function Gathering() {
  const [selected, setSelected] = useState(null)

  const showPrev = (e) => {
    e.stopPropagation()
    setSelected((i) => (i - 1 + photos.length) % photos.length)
  }
  const showNext = (e) => {
    e.stopPropagation()
    setSelected((i) => (i + 1) % photos.length)
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '110px 60px 130px', maxWidth: 1300, margin: '0 auto' }}>
        <FadeIn>
          <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>GATHERING</h1>
          <p style={{ color: '#888', marginBottom: 40, fontSize: 16 }}>팀워크를 다지기 위한 IBA만의 활동들을 소개합니다.</p>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 10 }}>
          {photos.map((photo, i) => (
            <FadeIn key={i} delay={Math.min(i * 0.05, 0.3)}>
              <div
                onClick={() => setSelected(i)}
                style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', cursor: 'pointer' }}
              >
                <img src={photo.src} alt={photo.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '30px 16px 14px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{photo.title}</div>
                  <div style={{ color: '#ccc', fontSize: 13, marginTop: 2 }}>{photo.caption}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 40 }}
        >
          <button
            onClick={() => setSelected(null)}
            style={{ position: 'absolute', top: 24, right: 32, background: 'none', border: 'none', color: '#fff', fontSize: 32, cursor: 'pointer', lineHeight: 1 }}
          >
            &times;
          </button>
          <button
            onClick={showPrev}
            style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#fff', fontSize: 40, cursor: 'pointer' }}
          >
            &#8249;
          </button>
          <img
            src={photos[selected].src}
            alt={photos[selected].title}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '85vw', maxHeight: '75vh', objectFit: 'contain', borderRadius: 6 }}
          />
          <button
            onClick={showNext}
            style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#fff', fontSize: 40, cursor: 'pointer' }}
          >
            &#8250;
          </button>
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 17 }}>{photos[selected].title}</div>
            <div style={{ color: '#ccc', fontSize: 14, marginTop: 4 }}>{photos[selected].caption}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gathering
