---
layout: page
title: Members
permalink: /members/
nav: true
nav_order: 2
---

{% comment %}
  명단은 _data/members.yml 에서 관리합니다.
  주소 끝에 #12기 처럼 붙이면 그 기수가 바로 열립니다.
{% endcomment %}

{% assign members = site.data.members %}
{% if members == empty or members == nil %}

<p>등록된 부원이 없습니다.</p>

{% else %}
{% assign generations = members | map: "generation" | uniq | sort | reverse %}

<div class="members-search" role="search" hidden>
  <button type="button" class="members-search-toggle" aria-label="부원 이름 검색" aria-expanded="false" aria-controls="members-search-field">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
  </button>
  <div class="members-search-field" id="members-search-field" inert>
    <input type="search" placeholder="이름 검색" aria-label="전체 기수 부원 이름 검색" aria-controls="members-search-results" autocomplete="off">
  </div>
  <div class="members-search-results" id="members-search-results" hidden></div>
</div>

<nav class="awards-tabs members-tabs" aria-label="기수 선택 · 좌우로 스크롤" tabindex="0">
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
      <li class="member" id="member-{{ gen }}-{{ forloop.index }}" data-name="{{ m.name | escape }}" data-generation="{{ gen }}" data-department="{{ m.department | escape }}" tabindex="-1">
        <div class="member-head">
          <p class="member-name"><span>{{ m.name | escape }}</span></p>
          {% if m.roles %}<div class="member-roles">{% for role in m.roles %}<span class="member-role">{{ role | escape }}</span>{% endfor %}</div>{% endif %}
        </div>
        {% if m.department %}<p class="member-dept">{{ m.department | escape }}</p>{% endif %}
        {% if m.graduate_school %}<p class="member-note">{{ m.graduate_school | escape }}</p>{% endif %}
        {% if m.portfolio %}<a class="member-portfolio" href="{{ m.portfolio | escape }}" target="_blank" rel="noopener noreferrer">Portfolio ↗</a>{% endif %}
        {% if m.note %}<p class="member-note">{{ m.note | escape }}</p>{% endif %}
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
        if (on) {
          var strip = a.parentElement;
          var stripRect = strip.getBoundingClientRect();
          var tabRect = a.getBoundingClientRect();
          if (tabRect.left < stripRect.left) strip.scrollLeft += tabRect.left - stripRect.left;
          else if (tabRect.right > stripRect.right) strip.scrollLeft += tabRect.right - stripRect.right;
        }
      });
    }
    tabs.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        history.replaceState(null, "", "#" + a.dataset.term);
        show(a.dataset.term);
        document.querySelectorAll('.member.is-selected').forEach(function (member) { member.classList.remove('is-selected'); });
      });
    });
    function showFromHash() {
      var term;
      try { term = decodeURIComponent(location.hash.slice(1)); } catch (e) { term = ''; }
      var member = document.getElementById(term);
      var section = member && member.closest('.awards-term');
      show(section ? section.dataset.term : term);
      if (member && member.classList.contains('member')) {
        document.querySelectorAll('.member.is-selected').forEach(function (item) { item.classList.remove('is-selected'); });
        member.classList.add('is-selected');
        requestAnimationFrame(function () {
          member.focus({ preventScroll: true });
          member.scrollIntoView({ block: 'center', behavior: 'auto' });
        });
      }
    }
    showFromHash();
    window.addEventListener('hashchange', showFromHash);

    var searchBox = document.querySelector('.members-search');
    var input = searchBox.querySelector('input');
    var results = searchBox.querySelector('.members-search-results');
    var records = Array.from(document.querySelectorAll('.member'));
    var toggle = searchBox.querySelector('.members-search-toggle');
    var field = searchBox.querySelector('.members-search-field');
    var pageTitle = document.querySelector('.post-header .post-title');
    if (pageTitle) {
      var titleRow = document.createElement('div');
      titleRow.className = 'members-title-row';
      pageTitle.parentNode.insertBefore(titleRow, pageTitle);
      titleRow.append(pageTitle, searchBox);
    }
    function closeSearch(restoreFocus) {
      searchBox.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      field.inert = true;
      closeResults();
      if (restoreFocus) toggle.focus();
    }
    toggle.addEventListener('click', function () {
      if (searchBox.classList.contains('is-open')) { closeSearch(true); return; }
      searchBox.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      field.inert = false;
      input.focus();
    });

    searchBox.hidden = false;
    function closeResults() { results.hidden = true; }
    function normalized(text) { return text.toLocaleLowerCase().replace(/\s+/g, ''); }
    function updateResults() {
      var query = normalized(input.value);
      results.replaceChildren();
      results.hidden = !query || !searchBox.classList.contains('is-open');
      if (results.hidden) return;
      var matches = records.filter(function (member) { return normalized(member.dataset.name).includes(query); });
      if (!matches.length) {
        var empty = document.createElement('p');
        empty.textContent = '검색 결과가 없습니다.';
        empty.setAttribute('role', 'status');
        results.append(empty);
      }
      matches.forEach(function (member) {
        var button = document.createElement('button');
        button.type = 'button';
        var name = document.createElement('span');
        name.textContent = member.dataset.name;
        var meta = document.createElement('small');
        meta.textContent = member.dataset.generation + '기' + (member.dataset.department ? ' · ' + member.dataset.department : '');
        button.append(name, meta);
        button.addEventListener('click', function () {
          var term = member.dataset.generation + '기';
          history.replaceState(null, '', '#' + term);
          show(term);
          records.forEach(function (item) { item.classList.remove('is-selected'); });
          member.classList.add('is-selected');
          input.value = '';
          closeSearch(false);
          requestAnimationFrame(function () {
            member.focus({ preventScroll: true });
            member.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
          });
        });
        results.append(button);
      });
    }
    input.addEventListener('input', updateResults);
    input.addEventListener('focus', updateResults);
    searchBox.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { event.preventDefault(); closeSearch(true); }
      var buttons = Array.from(results.querySelectorAll('button'));
      if (results.hidden || !buttons.length) return;
      if (event.target === input && (event.key === 'Enter' || event.key === 'ArrowDown')) {
        event.preventDefault();
        if (event.key === 'Enter') buttons[0].click(); else buttons[0].focus();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        var index = buttons.indexOf(event.target);
        if (index < 0) return;
        event.preventDefault();
        var next = index + (event.key === 'ArrowDown' ? 1 : -1);
        if (next < 0) input.focus(); else buttons[Math.min(next, buttons.length - 1)].focus();
      }
    });
    document.addEventListener('pointerdown', function (event) { if (!searchBox.contains(event.target)) closeSearch(false); });
    searchBox.addEventListener('focusout', function (event) { if (event.relatedTarget && !searchBox.contains(event.relatedTarget)) closeSearch(false); });
  })();
</script>
{% endif %}
