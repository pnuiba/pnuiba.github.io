---
layout: page
title: Members
permalink: /members/
description: 역대 IBA 부원들을 소개합니다.
nav: true
nav_order: 2
---

{% comment %}
  명단은 _data/members.yml 에서 관리합니다. 이 파일은 고칠 필요가 없습니다.
  위쪽 기수 탭을 누르면 그 기수만 보입니다(Awards 페이지와 같은 방식).
  주소 끝에 #12기 처럼 붙이면 그 기수가 바로 열립니다.
{% endcomment %}

{% assign members = site.data.members %}
{% if members == empty or members == nil %}

<p>등록된 부원이 없습니다.</p>

{% else %}
{% assign generations = members | map: "generation" | uniq | sort | reverse %}

<nav class="awards-tabs" aria-label="기수 선택">
  {% for gen in generations %}
    <a class="awards-tab" href="#{{ gen }}기" data-term="{{ gen }}기">{{ gen }}기</a>
  {% endfor %}
</nav>

{% for gen in generations %}
{% assign group = members | where: "generation", gen %}
<section class="awards-term" id="{{ gen }}기" data-term="{{ gen }}기">
  <h2 class="sr-only">{{ gen }}기</h2>
  <ul class="members-grid">
    {% for m in group %}
      <li class="member">
        <p class="member-name">{{ m.name }}</p>
        {% if m.department %}<p class="member-dept">{{ m.department }}</p>{% endif %}
        {% if m.note %}<p class="member-note">{{ m.note }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}

<script>
  // 선택한 기수만 표시. JS가 꺼져 있으면 전체가 보임.
  (function () {
    var tabs = document.querySelectorAll(".awards-tab");
    var sections = document.querySelectorAll(".awards-term");
    if (!sections.length) return;
    function show(term) {
      var exists = Array.prototype.some.call(sections, function (s) { return s.dataset.term === term; });
      if (!exists) term = sections[0].dataset.term;
      sections.forEach(function (s) { s.hidden = s.dataset.term !== term; });
      tabs.forEach(function (a) {
        var on = a.dataset.term === term;
        a.classList.toggle("is-active", on);
        if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
    }
    tabs.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        history.replaceState(null, "", "#" + a.dataset.term);
        show(a.dataset.term);
      });
    });
    show(decodeURIComponent(location.hash.slice(1)));
  })();
</script>
{% endif %}
