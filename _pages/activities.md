---
layout: page
title: Activities
permalink: /activities/
description: 행사, 특강, 소모임 등 IBA의 교류 활동
nav: true
nav_order: 3
# 카테고리 표시 순서. _projects/ 안의 각 파일에 적은 category 값과 같아야 합니다.
display_categories: [행사, 특강, 소모임]
images:
  lightbox2: true # 카드를 누르면 사진 크게 보기 (X 로 닫기, 여러 장이면 좌우로 넘기기)
---

{% comment %}
  활동 하나 = _projects/ 폴더의 md 파일 하나입니다.
  새 활동을 추가하려면 _projects/ 의 기존 파일을 복사해서 제목·설명·사진 경로만 바꾸세요.
  카드 순서는 각 파일의 importance 숫자가 작을수록 앞에 옵니다.
  카드를 누르면 페이지 이동 없이 사진 크게 보기 창이 열립니다 (X·Esc·바깥 클릭으로 닫기).
  사진이 여러 장이면 활동 파일에 images: 목록을 적으세요 (img 는 카드 대표 사진).
  파일 앞부분에 news: true 와 date 를 적으면 홈 화면 NEWS! 에도 자동으로 올라갑니다.
{% endcomment %}

<div class="projects">
{% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized = site.projects | where: "category", category | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in categorized %}
      {% comment %} 테마 카드(projects.liquid)와 같은 모양. 링크만 상세 페이지 대신 사진 크게 보기로 {% endcomment %}
      {% if project.images %}{% assign photos = project.images %}{% else %}{% assign photos = project.img | split: "|" %}{% endif %}
      {% capture gallery %}activity-{{ project.slug }}{% endcapture %}
      <div class="col">
        <a href="{{ photos.first | relative_url }}" data-lightbox="{{ gallery }}" data-title="{{ project.title | escape }}{% if photos.size > 1 %} (1/{{ photos.size }}){% endif %}">
          <div class="card h-100 hoverable">
            {% include figure.liquid loading="eager" path=project.img sizes="250px" alt=project.title class="card-img-top" %}
            <div class="card-body">
              <h2 class="card-title">{{ project.title }}</h2>
              <p class="card-text">{{ project.description }}</p>
            </div>
          </div>
        </a>
        {% for photo in photos offset: 1 %}
          <a href="{{ photo | relative_url }}" data-lightbox="{{ gallery }}" data-title="{{ project.title | escape }} ({{ forloop.index | plus: 1 }}/{{ photos.size }})" hidden></a>
        {% endfor %}
      </div>
    {% endfor %}
  </div>
{% endfor %}
</div>

<script>
  // 주소 끝이 #activity-활동파일이름 이면 그 활동 사진을 바로 크게 열기 (홈 NEWS 링크용)
  window.addEventListener("load", function () {
    var name = decodeURIComponent(location.hash.slice(1));
    if (name.indexOf("activity-") !== 0) return;
    var link = document.querySelector('[data-lightbox="' + name + '"]');
    if (link) link.click();
  });
</script>
