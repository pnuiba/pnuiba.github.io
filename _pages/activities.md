---
layout: page
title: IBAlbum
permalink: /activities/
nav: true
nav_order: 3
images:
  lightbox2: true
---

{% comment %}
  사진과 행사명은 _projects/ 에서 관리합니다. images 목록이 있으면 사진을 모두 표시합니다.
  이미지 비율은 _data/activity_photos.yml 에서 읽습니다. 새 이미지의 크기가 없으면 로드 후 계산합니다.
  행사·연도를 나누지 않고 최신 활동부터 하나의 Masonry 갤러리에 표시합니다.
  사진을 누르면 확대해서 같은 활동의 사진을 넘겨볼 수 있습니다.
{% endcomment %}
{% assign dated = site.projects | where_exp: "p", "p.category != '소모임' and p.date" | sort: "date" | reverse %}
{% assign ongoing = site.projects | where: "category", "소모임" | sort: "importance" %}
{% assign activities = dated | concat: ongoing %}

<div class="album-gallery" aria-label="IBA 활동 사진">
  {% for project in activities %}
    {% if project.images %}{% assign photos = project.images %}{% else %}{% assign photos = project.img | split: '|' %}{% endif %}
    {% for photo in photos %}
      {% assign dimensions = site.data.activity_photos[photo] %}
      <a class="album-photo" href="{{ photo | relative_url }}" data-date="{% unless project.category == '소모임' %}{{ project.date | date: '%Y-%m-%d' }}{% endunless %}" data-activity="activity-{{ project.slug }}" data-lightbox="activity-{{ project.slug }}" data-title="{{ project.title | escape }}{% if photos.size > 1 %} ({{ forloop.index }}/{{ photos.size }}){% endif %}" aria-label="{{ project.title | escape }} 사진 크게 보기{% if photos.size > 1 %} ({{ forloop.index }}/{{ photos.size }}){% endif %}">
        <img src="{{ photo | relative_url }}" alt="{{ project.title | escape }}" loading="lazy" decoding="async"{% if dimensions %} width="{{ dimensions.width }}" height="{{ dimensions.height }}"{% endif %}>
        <span class="album-caption">
          <span class="album-caption-title">{{ project.title | escape }}</span>
          {% if project.description %}<span class="album-caption-description">{{ project.description | escape }}</span>{% endif %}
          {% unless project.category == '소모임' %}<time class="album-caption-date" datetime="{{ project.date | date: '%Y-%m-%d' }}">{{ project.date | date: '%Y.%m' }}</time>{% endunless %}
        </span>
      </a>
    {% endfor %}
  {% endfor %}
</div>
<script src="{{ '/assets/js/album-gallery.js' | relative_url }}" defer></script>
