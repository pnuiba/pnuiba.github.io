---
layout: page
title: Gathering
permalink: /activities/
description: 행사, 특강, 소모임 등 IBA의 교류 활동을 소개합니다.
# 카테고리 표시 순서. _projects/ 안의 각 파일에 적은 category 값과 같아야 합니다.
display_categories: [행사, 특강, 소모임]
---

{% comment %}
  활동 하나 = _projects/ 폴더의 md 파일 하나입니다.
  새 활동을 추가하려면 _projects/ 의 기존 파일을 복사해서 제목·설명·사진 경로만 바꾸세요.
  카드 순서는 각 파일의 importance 숫자가 작을수록 앞에 옵니다.
{% endcomment %}

<p>
{% for category in page.display_categories %}
  <a class="badge" href="#{{ category }}">#{{ category }}</a>
{% endfor %}
</p>

<div class="projects">
{% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized = site.projects | where: "category", category | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in categorized %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endfor %}
</div>
