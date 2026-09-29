import { posterSlides } from '../../data/application'
import { useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import FadeIn from '../../components/ui/FadeIn'



function Application() {
  const [slide, setSlide] = useState(0)
  const prevSlide = () => setSlide((i) => (i - 1 + posterSlides.length) % posterSlides.length)
  const nextSlide = () => setSlide((i) => (i + 1) % posterSlides.length)

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <FadeIn>
        <section style={{ padding: '110px 60px 20px', maxWidth: 880, margin: '0 auto' }}>
          <h2 style={{ fontSize: 34, marginBottom: 10 }}>APPLICATION</h2>
          <p style={{ color: '#888', marginBottom: 56, fontSize: 15 }}>어떻게 지원하나요?</p>
        </section>
      </FadeIn>

      <section style={{ padding: '0 60px 130px', maxWidth: 880, margin: '0 auto' }}>
        <FadeIn>
          <div>
            <h3 style={{ fontSize: 19, marginBottom: 16 }}>모집 대상</h3>
            <ul style={{ color: '#aaa', lineHeight: 2, fontSize: 15.5, paddingLeft: 22, margin: 0 }}>
              <li>현재 부산대학교 학부 재학생 또는 휴학생</li>
              <li>연속 2개 학기(방학 포함) 동안 활동이 가능한 분</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div style={{ borderTop: '1px solid #222', paddingTop: 32, marginTop: 32 }}>
            <h3 style={{ fontSize: 19, marginBottom: 16 }}>서류 전형</h3>
            <ul style={{ color: '#aaa', lineHeight: 2, fontSize: 15.5, paddingLeft: 22, margin: 0 }}>
              <li>
                지원서: 양식에 맞게 작성 후 PDF 변환 제출
                <ul style={{ marginTop: 6 }}>
                  <li>
                    지원서 다운로드:{' '}
                    <a href="https://app.notion.com/p/IBA-12-38e28da74e27802bb6abe4493e7f170e?source=copy_link" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90d9' }}>
                      바로가기
                    </a>
                  </li>
                </ul>
              </li>
              <li>내용: 기본 인적 사항 및 지원 동기, 제시문 답변 등</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div style={{ borderTop: '1px solid #222', paddingTop: 32, marginTop: 32 }}>
            <h3 style={{ fontSize: 19, marginBottom: 16 }}>면접 전형</h3>
            <ul style={{ color: '#aaa', lineHeight: 2, fontSize: 15.5, paddingLeft: 22, margin: 0 }}>
              <li>형식: 다대일 면접 (면접관 3명 : 지원자 1명)</li>
              <li>시간: 약 15~20분 진행</li>
              <li>
                내용:
                <br />
                1. 지원서 및 제시문 답변을 기반으로 질문 진행
                <br />
                2. 제시문은 완전한 정답보다 논리적 사고 과정을 평가
                <br />
                3. 비즈니스·모델링 전공 지식이 없어도 충분히 답변 가능
                <br />
                4. 지원서에 작성된 내용을 토대로 추가 질문 예정
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div style={{ borderTop: '1px solid #222', paddingTop: 32, marginTop: 32 }}>
            <h3 style={{ fontSize: 19, marginBottom: 16 }}>안내 사항</h3>
            <ul style={{ color: '#aaa', lineHeight: 2, fontSize: 15.5, paddingLeft: 22, margin: 0 }}>
              <li>
                서류 합격 발표 당일, 개별 면접 일정과 진행 방식은 문자로 상세히 안내드립니다.
                <br />
                12기 활동은 8월 4일 OT를 시작으로, 매주 목요일 오후에 세션 진행됩니다.
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div style={{ borderTop: '1px solid #222', paddingTop: 32, marginTop: 32 }}>
            <h3 style={{ fontSize: 19, marginBottom: 4 }}>2026 12기 모집요강</h3>
            <p style={{ color: '#777', fontSize: 13.5, marginBottom: 20 }}>옆으로 넘겨 확인하실 수 있습니다.</p>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button
                onClick={prevSlide}
                style={{ position: 'absolute', left: -8, background: 'none', border: 'none', color: '#fff', fontSize: 36, cursor: 'pointer', zIndex: 1 }}
              >
                &#8249;
              </button>
              <img
                src={posterSlides[slide]}
                alt={`모집요강 ${slide + 1}`}
                style={{ width: '100%', maxWidth: 480, height: 'auto', borderRadius: 8, display: 'block', margin: '0 auto' }}
              />
              <button
                onClick={nextSlide}
                style={{ position: 'absolute', right: -8, background: 'none', border: 'none', color: '#fff', fontSize: 36, cursor: 'pointer', zIndex: 1 }}
              >
                &#8250;
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
              {posterSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  style={{ width: 7, height: 7, borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer', background: i === slide ? '#fff' : '#444' }}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}

export default Application
