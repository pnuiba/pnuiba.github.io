# PNU IBA 홈페이지

부산대학교 지능형 경영 데이터 분석 학회 IBA의 홈페이지입니다.
[al-folio](https://github.com/alshedivat/al-folio) (Jekyll) 템플릿을 기반으로 하며, **GitHub Pages**로 무료 배포합니다.

> 내용 수정은 대부분 **Markdown(`.md`) 또는 YAML(`.yml`) 파일만 고치면 됩니다.**
> 코드를 몰라도 GitHub 웹에서 파일을 열고 연필 아이콘(Edit)으로 고친 뒤 커밋하면, 몇 분 뒤 사이트에 반영됩니다.

---

## 무엇을 고치려면 어디를 열면 되나요?

| 하고 싶은 일                     | 고칠 파일                                    | 방법                                                                 |
| -------------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| 공지·소식 올리기                 | `_news/` 폴더                                | 기존 파일을 복사해 날짜·내용만 바꾸기 ([예시](#공지소식-추가))       |
| 수상 내역 추가                   | `_data/awards.yml`                           | 해당 연도 `items`에 `title` 추가. 사진·코멘트·발표자료는 선택 (파일 맨 위 예시 참고) |
| 부원 명단 추가                   | `_data/members.yml`                          | 파일 안 예시대로 추가 → 기수별로 자동 정렬                           |
| 교류 활동(행사 사진) 추가        | `_projects/` 폴더 + `assets/img/activities/` | 사진 올리고 기존 파일 복사 ([예시](#교류-활동-추가))                 |
| 커리큘럼 수정 (Home)             | `_data/curriculum.yml`                       | `title`, `items` 수정                                                |
| FAQ 수정 (Join Us)               | `_data/faq.yml`                              | `q`(질문), `a`(답변) 추가                                            |
| 연락처(메일·인스타·전화) 수정    | `_data/contact.yml`, `_data/socials.yml`     | 값만 바꾸기                                                          |
| 모집 안내·일정 수정              | `_pages/recruit.md`                          | 본문 Markdown 수정                                                   |
| 모집 포스터 교체                 | `assets/img/recruit/` + `_pages/recruit.md`  | 새 폴더에 포스터 올리고 맨 위 `posters:` 목록 경로 바꾸기            |
| 학회 소개·교수님·조직도 (About)  | `_pages/introduction.md`, `assets/img/intro/` | 본문 수정 / 조직도 이미지는 같은 이름으로 덮어쓰기                  |
| 홈 화면 문구                     | `_pages/about.md`                            | 본문 수정                                                            |
| 상단 메뉴 구성                   | 각 페이지 맨 위 `nav`, `nav_order`           | 자세히는 [메뉴](#상단-메뉴)                                          |
| 사이트 이름·설명·주소·하단 문구  | `_config.yml`                                | 맨 위 "사이트 기본 정보" 부분                                        |
| 왼쪽 위 로고 문구(IBA / 작은 글씨) | `_config.yml`의 `title`, `brand_subtitle`  | 색·크기는 `_includes/header.liquid` 맨 위 `<style>`                  |

### 공지·소식 추가

`_news/` 폴더에 `YYYY-MM-DD-영문이름.md` 파일을 만듭니다. 홈 화면 "NEWS!" 목록과 소식 전체 페이지(`/news/`, 홈의 NEWS! 제목을 누르면 이동)에 자동으로 표시됩니다.

```markdown
---
layout: post
date: 2027-01-05
inline: true
---

:mega: **[2027 IBA 13기 신입기수 모집]({{ '/recruit/' | relative_url }})** (01.05 ~ 01.19)
```

- `inline: true`면 목록에 한 줄로만 표시됩니다.
- 긴 글로 쓰고 싶으면 `inline: true`를 지우고 `title: 제목`을 추가한 뒤 본문을 쓰면, 클릭해서 읽는 글이 됩니다.

### 교류 활동 추가

1. 사진을 `assets/img/activities/`에 올립니다. 파일 이름은 영문·숫자·`-`만 쓰는 걸 권장합니다(예: `2026-spring-mt.jpg`). 가로 1000px 정도, 500KB 이하면 충분합니다.
2. `_projects/` 폴더의 기존 파일 하나를 복사해 새 이름으로 저장하고 앞부분을 고칩니다.

```markdown
---
title: "2026 봄 MT"
description: "한 줄 소개"
category: 행사 # 행사 / 특강 / 소모임 중 하나
importance: 1 # 숫자가 작을수록 앞에 표시
img: assets/img/activities/2026-spring-mt.jpg
---

{% include figure.liquid path="assets/img/activities/2026-spring-mt.jpg" class="img-fluid rounded z-depth-1" alt="2026 봄 MT" zoomable=true %}
```

새 카테고리를 만들려면 `_pages/activities.md`의 `display_categories` 목록에도 추가해야 합니다.

**홈 NEWS!에도 올리기**: 앞부분에 `news: true`와 `date`를 추가하면, 같은 파일 하나로 Activities 카드와 홈 NEWS!(날짜 + 제목 링크)에 함께 올라갑니다. 소식 파일(`_news/`)을 따로 만들 필요가 없습니다.

```markdown
---
title: "11기 졸업식"
description: "한 줄 소개"
category: 행사
importance: 1
img: assets/img/activities/2026-graduation.jpg
news: true # 홈 NEWS!에 표시
date: 2026-08-22 # NEWS! 날짜 (news: true 일 때 필수)
---
```

### 상단 메뉴

하위 메뉴(드롭다운) 없이 6개 메뉴를 한 줄로 둡니다.

| 메뉴       | 파일                     | 내용                                     |
| ---------- | ------------------------ | ---------------------------------------- |
| Home       | `_pages/about.md`        | 소개 + NEWS! + Curriculum + 1년 로드맵   |
| About      | `_pages/introduction.md` | 학회 소개·지도교수·조직도 (`/about/`)    |
| Members    | `_pages/members.md`      | 부원 명단                                |
| Activities | `_pages/activities.md`   | 행사·특강·소모임 카드 (`_projects/`)     |
| Awards     | `_pages/awards.md`       | 수상 실적                                |
| Join Us    | `_pages/recruit.md`      | 지원 안내 + FAQ + Contact (`/recruit/`)  |

- 메뉴에 보이는 이름은 각 파일의 `title`이고, 메뉴에 넣으려면 맨 위에 `nav: true`, 순서는 `nav_order` 숫자로 정합니다. 메뉴와 페이지 제목은 영어, 본문은 한국어로 씁니다.
- 소식 전체 페이지(`news.md`)는 메뉴에 두지 않고 홈의 NEWS! 제목에서 연결합니다.
- 예전 주소(`/introduction/`, `/curriculum/`, `/faq/`, `/contact/`)는 `_pages/redirects/`의 파일이 옮겨진 위치(홈의 Curriculum, Join Us의 FAQ·Contact, About)로 이동시킵니다.

### 이미지에 관해

- 로고·다이어그램 원본은 **투명 배경 + 흰 글씨**라서, 사이트에는 어두운 배경을 입힌 버전(`assets/img/logo/logo-dark.png`, `assets/img/intro/*.png`)을 씁니다. 새 로고 이미지를 넣을 때도 밝은 테마에서 보이는지 확인하세요.
- 이미지에 **개인 전화번호 등 개인정보가 들어가지 않도록** 주의하세요.

---

## 인터랙티브 요소

이미 들어 있는 기능 (al-folio 기본 제공):

| 기능                           | 어디에 쓰였나                          | 켜는 법                                                                             |
| ------------------------------ | -------------------------------------- | ----------------------------------------------------------------------------------- |
| 다크 모드 전환                 | 상단 오른쪽 버튼                       | `_config.yml`의 `enable_darkmode`                                                   |
| 사이트 검색 (Ctrl+K / ⌘K)      | 상단 검색 아이콘                       | `_config.yml`의 `search_enabled`                                                    |
| 이미지 클릭 확대               | 교수님 사진, 조직도, 활동 사진         | `figure.liquid`에 `zoomable=true`                                                   |
| 사진 갤러리 (좌우 넘기기)      | 모집 포스터                            | 페이지 맨 위에 `images: { lightbox2: true }`, 링크에 `data-lightbox="그룹이름"`     |
| 차트 (ECharts)                 | 학과 분포 도넛 (About)                 | 페이지 맨 위에 `chart: { echarts: true }`, 본문에 ` ```echarts ` 코드 블록          |
| 접기/펼치기                    | 커리큘럼, FAQ                          | HTML `<details><summary>제목</summary>내용</details>`                               |
| 카드 + 카테고리                | 교류 활동                              | `_projects/` 파일의 `category`                                                      |
| 스크롤 진행 바, 맨 위로 버튼   | 모든 페이지                            | `_config.yml`의 `enable_progressbar`, `back_to_top`                                 |

새로운 기능을 직접 만들어 넣고 싶을 때:

- **특정 페이지에만** 넣는 경우 (권장)
  - 그 페이지 md 파일 본문에 `<script>`를 바로 쓰거나, `assets/js/`에 JS 파일을 만들고 `<script src="{{ '/assets/js/파일.js' | relative_url }}"></script>`로 불러옵니다.
  - CSS는 페이지 맨 위 설정에 `_styles: |` 항목으로 쓸 수 있습니다(layout이 `page`인 페이지).
- **사이트 전체에** 넣어야 하는 경우
  - al-folio에는 사이트 전체용 연결 지점이 없어서, 테마 파일(예: `_includes/scripts.liquid`)을 복사해 덮어써야 합니다.
  - 덮어쓴 파일은 테마 업데이트 때 직접 관리해야 하니, 덮어쓴 뒤 `bundle exec al-folio upgrade overrides audit`을 실행하고 생기는 `.al-folio-overrides.yml`도 함께 커밋하세요.

---

## 디자인 (테마)

사이트의 색·글꼴·버튼·카드 모양은 [shadcn/ui 테마](https://ui.shadcn.com/docs/theming) 방식을 따르며, **`assets/css/theme.css` 한 파일**에 모여 있습니다.

- **색 바꾸기**: 파일 맨 위 "1. 토큰"의 값만 고치면 사이트 전체에 반영됩니다. 주 색(`--primary`)은 IBA 블루(`#1d3cf5`)이고, 다크모드 값은 `html[data-theme="dark"]` 블록에 있습니다.
- **다른 팔레트 쓰기**: shadcn 사이트에서 원하는 Base Color(Zinc, Stone 등)의 `:root` / `.dark` 값을 복사해 같은 이름의 변수에 붙여 넣고, `--primary`만 IBA 블루로 다시 맞추세요.
- **모서리 둥글기**: `--radius` (기본 `0.625rem`)
- **글꼴**: Pretendard (CDN). `_includes/header.liquid` 맨 위에서 불러옵니다.
- **차트 색**: ECharts는 CSS 변수를 읽지 못해서, 페이지의 차트 코드에 같은 색을 hex로 적어 두었습니다(`"color": [...]`). 토큰을 바꾸면 차트 색도 함께 바꿔 주세요.

본문에서 쓸 수 있는 컴포넌트:

| 모양              | 쓰는 법                                                                 |
| ----------------- | ----------------------------------------------------------------------- |
| 버튼 (기본/강조)  | `<a class="btn" href="…">` / `<a class="btn btn-primary" href="…">`     |
| 배지              | `<a class="badge" href="…">#태그</a>` (테두리형: `badge badge-outline`) |
| 아코디언          | `<details><summary><span>제목</span></summary>내용</details>`           |
| 표                | 일반 Markdown 표를 쓰면 자동으로 적용                                   |

---

## 로컬에서 미리 보기

수정 결과를 내 컴퓨터에서 먼저 확인하고 싶을 때만 필요합니다. (GitHub 웹에서만 고친다면 건너뛰어도 됩니다.)

**준비 (최초 1회)**

- macOS: `brew install ruby@3.3` 후 `export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"` (터미널 설정 파일에 추가 권장)
- Windows: [RubyInstaller](https://rubyinstaller.org/)에서 Ruby 3.3 (WITH DEVKIT) 설치

```sh
bundle config set --local path vendor/bundle   # gem을 이 폴더 안에만 설치
bundle install
```

**실행**

```sh
bundle exec jekyll serve --force_polling --livereload   # http://localhost:4000 (저장하면 자동 새로고침)
bundle exec jekyll build      # 배포용 빌드만 해보기 (_site 폴더 생성)
```

`_config.yml`을 고쳤을 때는 서버를 껐다(Ctrl+C) 다시 켜야 반영됩니다.

---

## 배포 (GitHub Pages)

`main` 브랜치에 push(머지)되면 GitHub Actions(`.github/workflows/build.yml`)가 빌드해서 **https://pnuiba.github.io** 에 자동 배포합니다.

**최초 설정 (관리자 1회)**: 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions**로 선택

- 테마 gem(`al_folio_core`)과 플러그인을 쓰기 때문에 GitHub Pages 기본 빌드(Deploy from a branch)로는 빌드되지 않습니다. 반드시 GitHub Actions를 선택하세요.
- Ruby 버전은 저장소의 `.ruby-version`(3.3.5)을 자동으로 사용합니다.
- PR을 올리면 같은 워크플로가 빌드만 해서 깨지지 않는지 확인하고, 배포는 하지 않습니다.
- 배포 진행 상황은 저장소 **Actions** 탭에서 볼 수 있고, 수동으로 다시 배포하려면 Actions → Build and deploy → **Run workflow**를 누릅니다.
- 개인 도메인을 연결하면 `_config.yml`의 `url`을 그 주소로 바꿔 주세요. 링크 미리보기·사이트맵에 쓰입니다.

---

## 폴더 구조

```text
_config.yml         사이트 전체 설정
_pages/             각 페이지 (홈, About, Members, Activities, Awards, Join Us, 소식) + redirects/(예전 주소 이동)
_data/              목록형 데이터 (수상, 부원, 커리큘럼, FAQ, 연락처, SNS)
_news/              공지·소식
_projects/          교류 활동 카드 (행사 하나 = 파일 하나)
assets/img/         이미지 (logo, intro, activities, recruit)
Gemfile             사용하는 플러그인 목록 (_config.yml 의 plugins 와 함께 관리)
```

화면 디자인(레이아웃, 스타일)은 저장소에 없고 `al_folio_core` 등 gem 안에 있습니다. 그래서 위 폴더만 관리하면 됩니다.

예외로 **`_includes/header.liquid` 하나만** 테마 파일을 덮어썼습니다(왼쪽 위 IBA 로고 문구). 바꾼 곳은 파일 맨 위 브랜드 부분뿐이고, `.al-folio-overrides.yml`에 기록되어 있습니다. 테마 버전을 올린 뒤에는 `bundle exec al-folio upgrade overrides audit`으로 원본과 달라진 점이 있는지 확인하세요.

### 주의할 점

- **플러그인 추가/삭제는 `Gemfile`과 `_config.yml`의 `plugins:` 두 곳을 같이** 고쳐야 합니다. 한쪽만 고치면 에러 없이 기능이 꺼집니다.
- `jekyll-scholar`(논문 기능)는 쓰지 않지만 테마 레이아웃이 필요로 하므로 지우면 빌드가 실패합니다.
- 기능이 안 보이면 ① gem 설치 ② `_config.yml` 설정 ③ 페이지 맨 위 설정(예: `chart: echarts: true`) 세 가지가 모두 켜져 있는지 확인하세요.

## 협업 방식

1. `main`에서 새 브랜치를 만들어 작업합니다 (예: `content/2027-awards`).
2. PR을 올리고, GitHub Actions 빌드 확인이 통과하는지와 로컬 미리보기(`localhost:4000`)에서 화면을 확인합니다.
3. 검토 후 `main`에 merge하면 자동 배포됩니다.

간단한 글자 수정은 GitHub 웹에서 바로 고쳐도 됩니다.

## 라이선스

이 사이트는 MIT 라이선스의 [al-folio](https://github.com/alshedivat/al-folio)를 기반으로 합니다 (`LICENSE` 참고).
사진과 학회 콘텐츠의 저작권은 PNU IBA에 있습니다.
