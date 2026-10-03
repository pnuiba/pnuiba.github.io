---
layout: page
title: Application
permalink: /recruit/
description: 어떻게 지원하나요?
images:
  lightbox2: true # 포스터 클릭 시 크게 보기 + 좌우로 넘기기
# 모집요강 포스터 목록 — 새 기수 포스터로 바꿀 때는 이 목록과 폴더만 고치면 됩니다.
posters_title: 2026 12기 모집요강
posters:
  - assets/img/recruit/2026-12th/poster-01.jpg
  - assets/img/recruit/2026-12th/poster-02.jpg
  - assets/img/recruit/2026-12th/poster-03.jpg
  - assets/img/recruit/2026-12th/poster-04.jpg
  - assets/img/recruit/2026-12th/poster-05.jpg
  - assets/img/recruit/2026-12th/poster-06.jpg
  - assets/img/recruit/2026-12th/poster-07.jpg
  - assets/img/recruit/2026-12th/poster-08.jpg
  - assets/img/recruit/2026-12th/poster-09.jpg
  - assets/img/recruit/2026-12th/poster-10.jpg
---

## 모집 대상

- 현재 부산대학교 학부 재학생 또는 휴학생
- 연속 2개 학기(방학 포함) 동안 활동이 가능한 분
- 전공 무관, 학년 무관 — 데이터 분석에 대한 관심과 열정만 있다면 누구나 지원 가능합니다.

## 모집 일정 (12기)

| 서류 지원     | 서류 결과 발표 | 면접          | 최종 결과 발표 |
| ------------- | -------------- | ------------- | -------------- |
| 07/07 ~ 07/21 | 07/25 (오후)   | 07/30 ~ 07/31 | 08/01 (오후)   |

## 서류 전형

- 지원서: 양식에 맞게 작성 후 PDF로 변환하여 제출
  - 지원서 다운로드: [바로가기](https://app.notion.com/p/IBA-12-38e28da74e27802bb6abe4493e7f170e?source=copy_link)
  - 파일명 `IBA지원서_12기_이름` 형식으로 저장 후 메일로 제출
- 내용: 기본 인적 사항 및 지원 동기, 제시문 답변 등

## 면접 전형

- 형식: 다대일 대면 면접 (면접관 3명 : 지원자 1명)
- 시간: 약 15~20분 진행
- 내용
  1. 지원서 및 제시문 답변을 기반으로 질문 진행
  2. 제시문은 완전한 정답보다 논리적 사고 과정을 평가
  3. 비즈니스·모델링 전공 지식이 없어도 충분히 답변 가능
  4. 지원서에 작성된 내용을 토대로 추가 질문 예정

## 안내 사항

- 서류 합격 발표 당일, 개별 면접 일정과 진행 방식은 문자로 상세히 안내드립니다.
- 12기 활동은 8월 4일 OT를 시작으로, 매주 목요일 오후에 세션이 진행됩니다.
- 교육 세션 진행 과정상 개인 노트북 지참이 필요합니다.

궁금한 점은 [FAQ]({{ '/faq/' | relative_url }})를 먼저 확인하시고, 그 밖의 문의는 [문의하기]({{ '/contact/' | relative_url }})로 연락해 주세요.

## {{ page.posters_title }}

포스터를 클릭하면 크게 보고 좌우로 넘길 수 있습니다.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px;">
  {% for poster in page.posters %}
    <div>
      <a href="{{ poster | relative_url }}" data-lightbox="posters" data-title="{{ page.posters_title }} ({{ forloop.index }}/{{ forloop.length }})">
        <img src="{{ poster | relative_url }}" class="img-fluid rounded z-depth-1" alt="{{ page.posters_title }} {{ forloop.index }}" loading="lazy">
      </a>
    </div>
  {% endfor %}
</div>
