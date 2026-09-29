import Navbar from '../../components/layout/Navbar'
import FadeIn from '../../components/ui/FadeIn'
import wordLogo from '../../assets/word.png'
import logo from '../../assets/logo-mark.png'
import ourGoalDiagram from '../../assets/our-goal-diagram.png'
import footerBanner from '../../assets/footer-banner.png'
import roadmapEducation from '../../assets/roadmap-01-education.png'
import roadmapContest from '../../assets/roadmap-02-contest.png'
import roadmapProject from '../../assets/roadmap-03-project.png'
import roadmapAlumni from '../../assets/roadmap-04-alumni.png'

function Home() {
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ position: 'relative', width: '100%', height: '78vh', minHeight: 480, overflow: 'hidden' }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', top: '-3%', left: '-3%', width: '106%', height: '106%', objectFit: 'cover', transform: 'scale(1.15)' }}>
          <source src="/hero-bg-v2.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logo} alt="IBA" style={{ height: 130, marginBottom: 22 }} />
          <p style={{ color: '#ddd', fontSize: 18, letterSpacing: 1.5 }}>부산대학교 지능형 경영 데이터 분석 학회 IBA</p>
        </div>
      </div>

      {/* About us: 원본 그리드 비율 5(이미지) : 1(여백) : 6(텍스트) = 41.6% : 8.3% : 50% */}
      <FadeIn>
        <section style={{ padding: '120px 60px', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 41.6%', maxWidth: '41.6%', display: 'flex', alignItems: 'center' }}>
              <img src={wordLogo} alt="IBA" style={{ height: 69, objectFit: 'contain' }} />
            </div>
            <div style={{ flex: '0 0 8.3%' }} />
            <div style={{ flex: '0 0 50%', maxWidth: 620 }}>
              <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 22 }}>About us</h2>
              <p style={{ lineHeight: 1.6, color: '#bbb', fontSize: 18 }}>
                부산대학교 경영 데이터 분석 학회 IBA는<br />
                'Intelligent Business Analytics'의 약자로<br />
                비즈니스 애널리틱스에 인공지능을 접목한 지능형 경영 분석을 학습하는 학회입니다.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <section style={{ padding: '120px 60px', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 65 }}>Our Goal</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <img
            src={ourGoalDiagram}
            alt="Our Goal"
            style={{ width: '100%', maxWidth: 780, height: 'auto', display: 'block', margin: '0 auto' }}
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{ marginTop: 60, lineHeight: 1.6, color: '#bbb', fontSize: 18, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            IBA는 경영학적 도메인을 바탕으로<br />
            Python 언어 기반의 프로그래밍, 데이터 마이닝 기법을 학습하고<br />
            실제 비즈니스 문제 해결 역량을 지닌 융합형 경영 인재 양성을 목표로 합니다.
          </p>
        </FadeIn>
      </section>

      <section style={{ padding: '120px 60px' }}>
        <FadeIn>
          <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: 'center', marginBottom: 70 }}>IBA Roadmap</h2>
        </FadeIn>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 80, maxWidth: 960, margin: '0 auto' }}>
          {[
            { image: roadmapEducation, desc: 'IBA 신입 기수의 교육 세션은 선배 기수가 직접 진행하며, 이를 통해 신입 기수들이 보다 효율적으로 배울 수 있는 체계적인 교육 환경을 제공합니다. 신입 기수들은 이 과정을 통해 기본적인 파이썬 프로그래밍부터 데이터 분석의 기초, 그리고 머신러닝 모델링 방법까지 폭넓게 학습하게 됩니다.', link: '교육세션 커리큘럼 보러가기 >' },
            { image: roadmapContest, desc: '학습한 내용을 기반으로 하여 학회 내부 자체 대회를 진행합니다. 대회는 데이터 분석 및 인사이트 도출, 분류 예측 모델 설계, 회귀 예측 모델 설계 등의 주제로 진행됩니다. 발표 후, 선배 기수의 피드백을 토대로 보완 발표를 진행하여 PT역량 및 머신러닝 모델링 역량을 기릅니다.' },
            { image: roadmapProject, desc: '성공적으로 교육 세션과 자체 대회 참여를 마친 부원들은 산학협력, 공모전, 교육봉사 프로젝트 등에서 실제 데이터를 다루며 실무적 역량을 기르는 기회를 갖습니다. 한 학기 간 쌓은 데이터 기반의 의사결정 역량과 더불어 대학생의 신선한 시각을 결합하여 기업에서 이용 가능한 전략을 수립합니다.' },
            { image: roadmapAlumni, desc: 'IBA 활동을 마치고 졸업 후 관련 분야로 취업하거나 대학원에 진학한 선배님들께서 특강을 진행합니다. 이 특강을 통해 선배님들은 데이터 분석, 비즈니스 전략 등 다양한 실무 경험과 진학 준비 과정에서 얻은 인사이트를 공유하며, 재학생 기수들이 향후 진로를 설계하고 전문성을 쌓는 데 도움을 줍니다.' },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: '0 0 33%', display: 'flex', justifyContent: 'center' }}>
                  <img src={item.image} alt="" style={{ width: '100%', maxWidth: 260, height: 'auto' }} />
                </div>
                <div style={{ flex: '1 1 0', minWidth: 300 }}>
                  <p style={{ lineHeight: 1.6, color: '#bbb', fontSize: 16, margin: 0, textAlign: 'left' }}>{item.desc}</p>
                  {item.link && (
                    <a href="#" style={{ display: 'block', marginTop: 14, fontSize: 13, color: '#777', textDecoration: 'none', textAlign: 'right' }}>{item.link}</a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <FadeIn>
        <footer style={{ padding: '40px 60px 0', display: 'flex', justifyContent: 'center' }}>
          <img src={footerBanner} alt="IBA Contact" style={{ width: '100%', maxWidth: 522, height: 'auto' }} />
        </footer>
      </FadeIn>
      <div style={{ textAlign: 'center', padding: 22, color: '#444', fontSize: 12 }}>Copyright © 2026 IBA All rights reserved.</div>
    </div>
  )
}

export default Home
