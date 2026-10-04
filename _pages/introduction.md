---
layout: page
title: About
permalink: /about/
description: IBA를 소개합니다.
nav: true
nav_order: 1
chart:
  echarts: true # 학과 분포 차트
---

IBA는 'Intelligent Business Analytics'의 약자로, 빅데이터 기반의 비즈니스 애널리틱스(Business Analytics)에
인공지능(AI)을 접목한 '지능형 경영 분석'을 연구하는, DB IFC·한국투자증권에 공식 등록된 경영학과 학술 동아리입니다.

## 지도교수

<div class="row align-items-center">
  <div class="col-sm-4">
    {% include figure.liquid loading="eager" path="assets/img/intro/professor.jpg" class="img-fluid rounded z-depth-1" alt="이민혁 교수" zoomable=true %}
  </div>
  <div class="col-sm-8">
    <p>부산대학교 경영학과 이민혁 교수님의 지도 하에서 마케팅, 금융 등 다양한 도메인 영역의 학습 및 프로젝트를 진행하며 성장하고 있습니다.</p>
    <p class="mb-0"><strong>이민혁 MINHYUK LEE</strong> &nbsp;Ph.D. / FRM</p>
    <p class="mb-0"><em>Associate Professor in Digital Finance</em></p>
    <p class="mb-0"><em>Department of Business Administration, College of Business, Pusan National University</em></p>
  </div>
</div>

## 조직도

**2026년 11기 집행부** — 이미지를 클릭하면 크게 볼 수 있습니다.

{% include figure.liquid path="assets/img/intro/org-chart.png" class="img-fluid rounded" alt="2026년 11기 집행부 조직도" zoomable=true %}

## IBA에서 얻을 수 있는 역량

1. **파이썬 기반 기초 코딩 역량** — 체계적인 교육 세션을 통해 초보자도 기초 코딩 역량을 기를 수 있습니다.
2. **데이터 기반 인사이트 도출 능력** — 다양한 도메인의 데이터를 다루며 데이터 기반 인사이트 도출 능력을 기를 수 있습니다.
3. **머신러닝/딥러닝 실습 역량** — 논문 스터디와 각종 프로젝트를 통해 XGB, RF 등 머신러닝부터 RNN, CNN 등 딥러닝까지 인공지능의 원리를 학습합니다.
4. **프로젝트 협업 능력과 실전 경험** — IBA 자체 프로젝트, 대회 등을 통해 프로젝트 협업 능력과 실전 경험을 쌓을 수 있습니다.
5. **선배님의 실무 특강을 통한 진로 탐색** — 진로 로드맵을 구체화하고, 취업 및 진학 고민에 대한 실질적인 조언을 얻을 수 있습니다.

## 학과 분포

다양한 학과들이 모여 더 넓은 시각, 다양한 관점으로 데이터 분석에 대해 학습할 수 있습니다. (10기, 11기 기준)

```echarts
{
  "backgroundColor": "transparent",
  "color": ["#1d3cf5", "#00bc7d", "#fe9a00", "#ad46ff", "#ff2056"],
  "tooltip": { "trigger": "item", "formatter": "{b}: 약 {c}%" },
  "legend": { "bottom": 0 },
  "series": [
    {
      "name": "학과 분포",
      "type": "pie",
      "radius": ["40%", "70%"],
      "itemStyle": { "borderRadius": 6, "borderWidth": 2 },
      "label": { "formatter": "{b}\n{c}%", "textBorderWidth": 0 },
      "data": [
        { "value": 26, "name": "경영학과" },
        { "value": 23, "name": "통계학과" },
        { "value": 19, "name": "산업공학과" },
        { "value": 7, "name": "경제학부" },
        { "value": 25, "name": "기타 7개 학과" }
      ]
    }
  ]
}
```
