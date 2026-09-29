# PNU IBA 홈페이지 코드 구조

프론트엔드 제작 전의 폴더 및 콘텐츠 정리 단계입니다.
기존 페이지의 디자인과 본문을 유지하고, 기능별 파일 분류와 데이터 분리만 적용했습니다.
화면 디자인, 메뉴 체계, 반응형 처리, 최종 URL은 추후 프론트엔드 작업에서 결정합니다.

## 실행 및 확인

```sh
npm ci
npm run dev
npm run lint
npm run build
```

## 폴더 역할

```text
src/
  pages/
    home/          기존 홈
    about/         학회 소개, 수상 내역
    members/       공개 부원 목록
    activities/    교육, 교류 행사
    join/          모집, FAQ, 연락처
  components/
    layout/        기존 Navbar
    ui/            기존 FadeIn
  data/            화면과 분리한 콘텐츠
  styles/          기존 전역 스타일
  assets/          기존 로고와 소개 이미지
  App.jsx          기존 공개 페이지 경로
  main.jsx         앱 시작점
public/
  images/          기존 행사 사진, 모집 포스터
```

## 콘텐츠 위치

| 내용 | 파일 |
| --- | --- |
| 수상 내역 | `src/data/awards.js` |
| 부원 명단 | `src/data/members.json` |
| 교육 내용 | `src/data/curriculum.js` |
| 교류 행사 사진 목록 | `src/data/activities.js` |
| FAQ | `src/data/faq.js` |
| 모집 포스터 목록 | `src/data/application.js` |
| 소개 본문 | `src/pages/about/Introduction.jsx` |
| 모집 본문 | `src/pages/join/Application.jsx` |
| 연락처 | `src/pages/join/Contact.jsx` |

부원 데이터는 `id`, `name`, `generation`, `department`, `note` 필드를 사용합니다.
원본에는 실제 명단이 포함되어 있지 않아 `members.json`은 빈 배열로 두었습니다.
원본 Supabase의 회원·게시글은 별도로 가져오지 않았습니다.

로그인·회원가입·관리자·게시판 및 DB 의존성은 제외했습니다.
문의 화면은 기존 연락처와 링크를 유지하고 DB 입력폼을 제외했습니다.
기존 메뉴의 로그인·계정·게시판 링크만 제거했습니다.
로그인·관리자·DB 코드가 있는 원본은 로컬의 상위 `source/pnu-iba-homepage`에 보관하며 이 저장소에는 포함하지 않습니다.

## 협업

콘텐츠 수정은 `src/data`, 화면 제작은 `src/pages`와 `src/components`에서 진행합니다.
기능별 브랜치에서 작업하고 PR로 검토합니다.

## Cloudflare Pages 배포

Cloudflare에서 **Workers & Pages → Create application → Pages → Git 저장소 연결**로
`pnu-iba/homepage`를 선택합니다. 비공개 조직 저장소 접근을 위해 조직 관리자의 GitHub 앱 승인이 필요할 수 있습니다.

| 설정 | 값 |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Vite` (또는 React/Vite) |
| Root directory | 저장소 루트 (비워두기) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js | `.node-version`의 `22.16.0` |

Cloudflare가 의존성을 설치하고 빌드합니다. 환경변수나 DB 연결은 필요하지 않습니다.
생성 후 `main`에 push하면 자동 배포됩니다. 이 문서 자체가 Cloudflare 프로젝트를 생성하는 것은 아닙니다.

React Router 하위 URL 직접 접속은 Cloudflare Pages 기본 SPA 동작을 사용합니다.
이를 유지하려면 `public/404.html`을 추가하지 않습니다. Vercel 전용 설정은 제거했습니다.

- [Vite 배포 안내](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/)
- [SPA 경로 처리](https://developers.cloudflare.com/pages/configuration/serving-pages/)
- [Node 버전 설정](https://developers.cloudflare.com/pages/configuration/build-image/)

GitHub Actions에서 push 및 PR마다 의존성 설치·코드 검사·빌드를 확인합니다.
실제 Cloudflare 배포는 Cloudflare의 Git 연동이 담당합니다.
