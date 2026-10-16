---
layout: page
title: IBAwards
permalink: /ibawards/
nav: true
nav_order: 4
images:
  lightbox2: true # 수상 사진 클릭 시 크게 보기
---

<script>
  // A reload starts at the top; incoming links and history navigation keep their anchors.
  (function () {
    var navigation = performance.getEntriesByType('navigation')[0];
    if (!navigation || navigation.type !== 'reload') return;
    history.scrollRestoration = 'manual';
    history.replaceState(history.state, '', location.pathname + location.search);
    function resetScroll() { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }
    resetScroll();
    window.addEventListener('pageshow', function (event) {
      if (!event.persisted) requestAnimationFrame(resetScroll);
    });
  })();
</script>

{% comment %}
  수상 내역은 _data/awards.yml 에서 관리합니다.
  주소 끝에 #2026 처럼 붙이면 그 연도가 바로 열립니다.
{% endcomment %}

{% assign awards = site.data.awards %}
{% assign total_awards = 0 %}
{% for t in awards %}{% assign count = t.items | size %}{% assign total_awards = total_awards | plus: count %}{% endfor %}
{% assign top_grades = "대상,1등" | split: "," %}
{% assign high_grades = "최우수상,2등,2등상" | split: "," %}
{% assign mid_grades = "우수상,3등" | split: "," %}

{% if total_awards > 0 %}
<section class="awards-orbit" hidden aria-label="전체 수상 기록 탐색">
  <div class="award-orbit-stage" tabindex="0" role="group" aria-roledescription="캐러셀" aria-label="수상 기록 구면 탐색">
    <canvas class="award-orbit-canvas" aria-hidden="true"></canvas>
  </div>
  <div class="award-orbit-data" hidden>
      {% for t in awards %}{% if t.items.size > 0 %}
        {% assign full_items = t.items | where_exp: "a", "a.images or a.image or a.comment or a.slides" %}
        {% assign brief_items = t.items | where_exp: "a", "a.images == nil and a.image == nil and a.comment == nil and a.slides == nil" %}
        {% assign term_records = full_items | concat: brief_items %}
          {% for a in term_records %}
            {% capture record_id %}{% if a.id %}award-{{ a.id }}{% else %}award-{{ t.term }}-record-{{ forloop.index }}{% endif %}{% endcapture %}
            {% capture grades %}{% if a.teams %}{% for team in a.teams %}{{ team.grade }}{% unless forloop.last %} · {% endunless %}{% endfor %}{% else %}{{ a.grade | join: ' · ' }}{% endif %}{% endcapture %}
            {% capture record_members %}{{ a.members | join: ' · ' }}{% for team in a.teams %}{% unless forloop.first %} · {% endunless %}{{ team.members | join: ' · ' }}{% endfor %}{% endcapture %}
            {% capture record_date %}{% if a.date %}{{ a.date | date: '%Y.%m.%d' }}{% elsif a.date_label %}{{ a.date_label }}{% endif %}{% endcapture %}
            {% capture preview_image %}{% if a.images %}{{ a.images | first | relative_url }}{% elsif a.image %}{{ a.image | relative_url }}{% else %}{{ '/assets/img/logo/logo-dark.png' | relative_url }}{% endif %}{% endcapture %}
            <span class="award-orbit-record" data-record="{{ record_id }}" data-title="{{ a.title | escape }}" data-members="{{ record_members | strip | escape }}" data-grade="{{ grades | escape }}" data-date="{{ record_date | escape }}" data-year="{{ t.term }}" data-image="{{ preview_image | strip | escape }}"></span>
          {% endfor %}
      {% endif %}{% endfor %}
  </div>
</section>
{% endif %}

<div class="awards-search" role="search" hidden>
  <div class="awards-search-field">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
    <input type="search" class="awards-search-input" placeholder="대회명, 수상자, 연도로 검색" aria-label="수상 기록 검색" aria-controls="awards-search-results" autocomplete="off">
  </div>
  <div class="awards-search-results" id="awards-search-results" hidden></div>
</div>

<nav class="awards-tabs" aria-label="연도 선택">
  {% for t in awards %}{% if t.items.size > 0 %}
    <a class="awards-tab" href="#{{ t.term }}" data-term="{{ t.term }}">{{ t.term }}</a>
  {% endif %}{% endfor %}
</nav>

{% for t in awards %}{% if t.items.size > 0 %}
<section class="awards-term" id="{{ t.term }}" data-term="{{ t.term }}">
  <h2 class="awards-term-title">{{ t.term }}</h2>
  {% assign full_items = t.items | where_exp: "a", "a.images or a.image or a.comment or a.slides" %}
  {% assign brief_items = t.items | where_exp: "a", "a.images == nil and a.image == nil and a.comment == nil and a.slides == nil" %}
  {% if full_items.size > 0 %}
  <ol class="awards-list">
    {% for a in full_items %}
      <li class="award award-record" id="{% if a.id %}award-{{ a.id }}{% else %}award-{{ t.term }}-record-{{ forloop.index }}{% endif %}" tabindex="-1">
        <div class="award-when">
          {% if a.date %}<time datetime="{{ a.date | date: '%Y-%m-%d' }}">{{ a.date | date: '%b %d' }}</time>{% elsif a.date_label %}<span>{{ a.date_label | escape }}</span>{% else %}<time>—</time>{% endif %}
        </div>

        {% if a.images %}{% assign photos = a.images %}{% elsif a.image %}{% assign photos = a.image | split: "|" %}{% else %}{% assign photos = nil %}{% endif %}
        {% if photos %}
          {% capture gallery %}award-{{ t.term }}-{{ forloop.index }}{% endcapture %}
          <div class="award-media">
            {% for photo in photos %}
              <a href="{{ photo | relative_url }}" data-lightbox="{{ gallery }}" data-title="{{ a.title | escape }}{% if photos.size > 1 %} ({{ forloop.index }}/{{ photos.size }}){% endif %}"{% unless forloop.first %} hidden{% endunless %}>
                {% if forloop.first %}<img src="{{ photo | relative_url }}" alt="{{ a.title | escape }}" loading="lazy">{% endif %}
              </a>
            {% endfor %}
            {% if photos.size > 1 %}<span class="award-media-count">+{{ photos.size | minus: 1 }}</span>{% endif %}
          </div>
        {% else %}
          <div class="award-media award-media--empty" aria-hidden="true"><i class="fa-regular fa-image"></i></div>
        {% endif %}

        <div class="award-body">
          <div class="award-head">
            {% if a.grade and a.teams == nil %}
              <p class="award-grades">
                {% for g in a.grade %}<span class="award-grade{% if top_grades contains g %} award-grade--top{% elsif high_grades contains g %} award-grade--high{% elsif mid_grades contains g %} award-grade--mid{% endif %}">{{ g }}</span>{% endfor %}
              </p>
            {% endif %}
            <h3 class="award-title"><span class="award-title-text">{{ a.title }}</span>{% if a.slides %}{% if a.slides contains '://' %}{% assign slides_url = a.slides %}{% else %}{% assign slides_url = a.slides | relative_url %}{% endif %} <a class="award-pdf" href="{{ slides_url }}" target="_blank" rel="noopener">PDF</a>{% endif %}</h3>
            {% if a.teams %}
              <ul class="award-teams">
                {% for team in a.teams %}
                  <li>
                    <span class="award-grade{% if top_grades contains team.grade %} award-grade--top{% elsif high_grades contains team.grade %} award-grade--high{% elsif mid_grades contains team.grade %} award-grade--mid{% endif %}">{{ team.grade }}</span>
                    <span class="award-members">{% for m in team.members %}<span>{{ m }}</span>{% endfor %}</span>
                  </li>
                {% endfor %}
              </ul>
            {% elsif a.members %}
              <p class="award-members">{% if a.team_name %}<span>{{ a.team_name | escape }}</span>{% endif %}{% for m in a.members %}<span>{{ m }}</span>{% endfor %}{% if a.members_note %} <span>{{ a.members_note | escape }}</span>{% endif %}</p>
            {% endif %}
            {% if a.organizer %}<p class="award-organizer"><span>주최</span>{{ a.organizer | escape }}</p>{% endif %}
          </div>
          <div class="award-summary-wrap">
            <div class="award-summary{% unless a.comment %} award-summary--empty{% endunless %}">
              <span class="award-summary-label">Summary</span>
              {% if a.comment %}<p><span class="award-summary-text">{{ a.comment | escape }}</span></p>{% endif %}
            </div>
          </div>
        </div>
      </li>
    {% endfor %}
  </ol>
  {% endif %}
  {% if brief_items.size > 0 %}
  <div class="awards-brief">
    {% if full_items.size > 0 %}<h3 class="awards-brief-title">그 외 수상</h3>{% endif %}
    <ul class="awards-brief-list">
      {% for a in brief_items %}
        <li class="award-record" id="{% if a.id %}award-{{ a.id }}{% else %}award-{{ t.term }}-record-{{ forloop.index | plus: full_items.size }}{% endif %}" tabindex="-1">
          <span class="awards-brief-grades">{% for g in a.grade %}<span class="award-grade{% if top_grades contains g %} award-grade--top{% elsif high_grades contains g %} award-grade--high{% elsif mid_grades contains g %} award-grade--mid{% endif %}">{{ g }}</span>{% endfor %}</span>
          <span class="awards-brief-name">{{ a.title }}</span>
          {% if a.members %}<span class="award-members">{% for m in a.members %}<span>{{ m }}</span>{% endfor %}</span>{% endif %}
        </li>
      {% endfor %}
    </ul>
  </div>
  {% endif %}
</section>
{% endif %}{% endfor %}

<script>
  // 선택한 기간(term)의 수상만 표시. JS가 꺼져 있으면 전체가 보임.
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
    function showFromHash(event) {
      var hash;
      try { hash = decodeURIComponent(location.hash.slice(1)); } catch (e) { hash = ""; }
      var target = document.getElementById(hash);
      var section = target && target.closest(".awards-term");
      show(section ? section.dataset.term : hash);
      if (target && target.classList.contains("award-record")) {
        requestAnimationFrame(function () {
          document.querySelectorAll('.award-record.is-highlighted').forEach(function (record) {
            record.classList.remove('is-highlighted');
          });
          target.classList.add('is-highlighted');
          target.focus({ preventScroll: true });
          var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          target.scrollIntoView({ block: "start", behavior: event && !reduced ? "smooth" : "auto" });
        });
      }
    }
    window.addEventListener("hashchange", showFromHash);
    showFromHash();

    // Standalone archive search, available independently of the WebGL sphere.
    var searchBox = document.querySelector('.awards-search');
    var searchInput = searchBox.querySelector('input');
    var searchResults = searchBox.querySelector('.awards-search-results');
    var searchRecords = Array.from(document.querySelectorAll('.award-orbit-record')).map(function (el) { return el.dataset; });
    if (!searchRecords.length) return;
    searchBox.hidden = false;
    function normalized(text) { return text.toLocaleLowerCase().replace(/\s+/g, ''); }
    function closeResults() { searchResults.hidden = true; }
    function updateResults() {
      var query = normalized(searchInput.value);
      searchResults.replaceChildren();
      searchResults.hidden = !query;
      if (!query) return;
      var matches = searchRecords.filter(function (item) {
        return normalized([item.title, item.members, item.grade, item.year, item.date].join(' ')).includes(query);
      });
      if (!matches.length) {
        var empty = document.createElement('p');
        empty.textContent = '검색 결과가 없습니다.';
        empty.setAttribute('role', 'status');
        searchResults.append(empty);
      }
      matches.forEach(function (item) {
        var button = document.createElement('button');
        button.type = 'button';
        var title = document.createElement('span');
        title.textContent = item.title;
        var meta = document.createElement('small');
        meta.textContent = [item.year, item.grade, item.members].filter(Boolean).join(' · ');
        button.append(title, meta);
        button.addEventListener('click', function () {
          closeResults();
          history.pushState(null, '', '#' + item.record);
          window.dispatchEvent(new Event('hashchange'));
        });
        searchResults.append(button);
      });
    }
    searchInput.addEventListener('input', updateResults);
    searchInput.addEventListener('focus', updateResults);
    searchBox.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { closeResults(); searchInput.focus(); closeResults(); }
      var buttons = Array.from(searchResults.querySelectorAll('button'));
      if (!buttons.length || searchResults.hidden) return;
      if (event.target === searchInput && (event.key === 'ArrowDown' || event.key === 'Enter')) {
        event.preventDefault();
        if (event.key === 'Enter') buttons[0].click(); else buttons[0].focus();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        var index = buttons.indexOf(event.target);
        if (index < 0) return;
        event.preventDefault();
        var next = index + (event.key === 'ArrowDown' ? 1 : -1);
        if (next < 0) searchInput.focus(); else buttons[Math.min(next, buttons.length - 1)].focus();
      }
    });
    document.addEventListener('pointerdown', function (event) { if (!searchBox.contains(event.target)) closeResults(); });
    searchBox.addEventListener('focusout', function (event) { if (event.relatedTarget && !searchBox.contains(event.relatedTarget)) closeResults(); });
  })();
</script>
<script src="{{ '/assets/js/ibawards-archive.js' | relative_url }}" defer></script>
