---
title: "회장님표 쿠키"
description: "회장님이 만들어주신 쿠키 🍪"
category: 행사
date: 2026-09-30
img: assets/img/activities/2026-president-cookies-1.jpg
images:
  - assets/img/activities/2026-president-cookies-1.jpg
  - assets/img/activities/2026-president-cookies-2.jpg
  - assets/img/activities/2026-president-cookies-3.jpg
---

[← IBAlbum]({{ '/ibalbum/' | relative_url }})

{% for photo in page.images %}
{% include figure.liquid loading="lazy" path=photo class="img-fluid rounded z-depth-1" alt="회장님표 쿠키와 함께한 IBA 부원들" zoomable=true %}
{% endfor %}
