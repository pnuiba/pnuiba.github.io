---
layout: page
title: Members
permalink: /members/
description: 역대 IBA 부원들을 소개합니다.
---

{% comment %}
  명단은 _data/members.yml 에서 관리합니다. 이 파일은 고칠 필요가 없습니다.
{% endcomment %}

{% assign members = site.data.members %}
{% if members == empty or members == nil %}

<p>등록된 부원이 없습니다.</p>

{% else %}
{% assign generations = members | map: "generation" | uniq | sort | reverse %}
{% for gen in generations %}
{% assign group = members | where: "generation", gen %}

<h2>{{ gen }}기</h2>

<div class="table-responsive">
  <table class="table table-sm table-borderless">
    <tbody>
      {% for m in group %}
        <tr>
          <th scope="row" style="width: 30%">{{ m.name }}</th>
          <td>{{ m.department }}{% if m.note %} · {{ m.note }}{% endif %}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
{% endfor %}
{% endif %}
