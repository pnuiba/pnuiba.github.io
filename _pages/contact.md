---
layout: page
title: Contact
permalink: /contact/
description: 방문에 감사드리며, 프로젝트 제안 및 추가 문의사항은 아래로 연락 부탁드립니다.
---

{% comment %}
  연락처는 _data/contact.yml 에서 관리합니다.
{% endcomment %}

{% assign c = site.data.contact %}

| 채널       | 연락처                                                         |
| ---------- | -------------------------------------------------------------- |
| 메일       | [{{ c.email }}](mailto:{{ c.email }})                          |
| 인스타그램 | [@{{ c.instagram }}](https://instagram.com/{{ c.instagram }}) |
| 전화       | {{ c.phone }}                                                  |

<p>
  <a class="btn btn-primary" role="button" href="mailto:{{ c.email }}"><i class="fa-solid fa-envelope"></i> 메일 보내기</a>
  <a class="btn" role="button" href="https://instagram.com/{{ c.instagram }}"><i class="fa-brands fa-instagram"></i> 인스타그램 DM</a>
</p>
