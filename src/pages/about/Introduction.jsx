import Navbar from '../../components/layout/Navbar'
import FadeIn from '../../components/ui/FadeIn'
import professorPhoto from '../../assets/professor.png'
import orgChartImage from '../../assets/org-chart.png'
import ourGoalDiagram from '../../assets/our-goal-diagram.png'
import roadmapEducation from '../../assets/roadmap-01-education.png'
import roadmapContest from '../../assets/roadmap-02-contest.png'
import roadmapProject from '../../assets/roadmap-03-project.png'
import roadmapAlumni from '../../assets/roadmap-04-alumni.png'

function Introduction() {
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <Navbar />

      <FadeIn>
        <section style={{ padding: '110px 60px 80px', maxWidth: 1300, margin: '0 auto' }}>
          <span style={{ display: 'block', color: '#4a90d9', fontSize: 13, fontWeight: 700, letterSpacing: 3, marginBottom: 14 }}>ABOUT IBA</span>
          <h2 style={{ fontSize: 34, fontWeight: 700, margin: 0 }}>Introduction</h2>
        </section>
      </FadeIn>

      <FadeIn>
        <section style={{ padding: '20px 60px 80px', maxWidth: 1300, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 40 }}>Professor</h2>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'center' }}>
            <img src={professorPhoto} alt="이민혁 교수" style={{ width: 227, height: 'auto', flexShrink: 0 }} />
            <div style={{ flex: '1 1 400px' }}>
              <p style={{ color: '#ddd', lineHeight: 1.6, fontSize: 16, marginBottom: 40 }}>
                부산대학교 경영학과 이민혁 교수님의 지도 하에서<br />
                마케팅, 금융 등 다양한 도메인 영역의 학습 및 프로젝트를 진행하며 성장하고 있습니다.
              </p>
              <div style={{ textAlign: 'right', fontSize: 14.5, color: '#bbb' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>이민혁 MINHYUK LEE&nbsp;&nbsp;Ph.D. / FRM</div>
                <div style={{ color: '#777', fontStyle: 'italic' }}>Associate Professor in Digital Finance</div>
                <div style={{ color: '#777', fontStyle: 'italic' }}>Department of Business Administration, College of Business,</div>
                <div style={{ color: '#777', fontStyle: 'italic' }}>Pusan National University</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section style={{ padding: '80px 60px 130px', maxWidth: 1300, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 10 }}>Organization</h2>
          <p style={{ textAlign: 'center', color: '#ddd', fontSize: 20, fontWeight: 700, margin: '30px 0' }}>2026년 11기 집행부</p>
          <img src={orgChartImage} alt="IBA Organization" style={{ width: '100%', maxWidth: 1180, height: 'auto', display: 'block', margin: '0 auto' }} />
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
    </div>
  )
}

export default Introduction