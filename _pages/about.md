---
layout: about
title: Home
permalink: /
subtitle: 부산대학교 지능형 경영 데이터 분석 학회

social: true # 하단에 메일·인스타그램 아이콘 표시 (_data/socials.yml)

# 홈 NEWS! 에 보여줄 소식 개수
news_limit: 5

announcements:
  enabled: false # al-folio 기본 news 목록 대신 아래 NEWS! 목록을 사용
---

<div class="home-intro">
  <p>
    부산대학교 경영 데이터 분석 학회 <strong>IBA</strong>는 <em>Intelligent Business Analytics</em>의 약자로,
    비즈니스 애널리틱스에 인공지능을 접목한 <strong>지능형 경영 분석</strong>을 학습하는 학회입니다.
  </p>
  <p>
    경영학적 도메인을 바탕으로 Python 기반 프로그래밍과 데이터 마이닝 기법을 배우고,
    교육 세션 · 자체 대회 · 프로젝트 · 선배 특강을 거치며 실제 비즈니스 문제를 해결하는 융합형 경영 인재로 성장합니다.
  </p>
</div>

<h2 class="home-news-title"><a href="{{ '/news/' | relative_url }}">NEWS!</a></h2>

{% comment %}
  소식 = _news/ 의 공지 + _projects/ 중 news: true 인 활동 (날짜 최신순). 개수는 위 news_limit 으로 조절합니다.
{% endcomment %}
{% include iba_news_list.liquid limit=page.news_limit %}

## Curriculum

{% comment %}
  커리큘럼 내용은 _data/curriculum.yml 에서 관리합니다.
{% endcomment %}

신입 기수는 첫 학기에 아래 교육 세션을 수강하고, 다음 학기에는 새 기수에게 교육을 진행합니다.
교육 세션은 보통 2~3시간 진행되며, 실습은 팀 프로젝트 형식으로 진행됩니다.

{% for week in site.data.curriculum %}

<details {% if forloop.first %}open{% endif %}>
  <summary><span><strong>{{ forloop.index | prepend: '0' | slice: -2, 2 }}</strong> &nbsp; {{ week.title }}</span></summary>
  <ul>
    {% for item in week.items %}
      <li>{{ item }}</li>
    {% endfor %}
  </ul>
</details>
{% endfor %}

## 1년 로드맵

| 학기  | 활동                                                                                                             |
| ----- | ---------------------------------------------------------------------------------------------------------------- |
| 1학기 | **교육 세션** — 파이썬 기초, EDA와 CDA, 통계 지식, 머신러닝/딥러닝 개념 학습 및 실습                             |
| 1학기 | **팀 프로젝트** — 교육 세션에서 배운 내용을 토대로 머신러닝(분류 및 회귀) 자체 대회 진행                         |
| 1학기 | **주니어 & 시니어 선배 특강** — 다양한 산업에 진출한 선배님들의 진로/취업 인사이트 공유, 홈커밍데이             |
| 2학기 | **심화 스터디 & 실전 프로젝트** — 관심 분야별 심화 스터디, 자유롭게 팀을 구성해 공모전 및 기업 연계 프로젝트 도전 |
