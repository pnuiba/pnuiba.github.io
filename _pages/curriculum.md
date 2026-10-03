---
layout: page
title: Curriculum
permalink: /curriculum/
description: 선배 기수가 직접 진행하는 신입 기수 교육 세션
---

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
