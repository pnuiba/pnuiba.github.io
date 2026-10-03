---
layout: page
title: FAQ
permalink: /faq/
description: 자주 묻는 질문
---

{% comment %}
  질문과 답변은 _data/faq.yml 에서 관리합니다.
{% endcomment %}

질문을 클릭하면 답변이 펼쳐집니다.

{% for section in site.data.faq %}

## {{ section.section }}

{% for item in section.items %}

<details>
  <summary><span><strong>Q.</strong> {{ item.q }}</span></summary>
  <p class="mb-0"><strong>A.</strong> {{ item.a }}</p>
</details>
{% endfor %}
{% endfor %}
