---
layout: page
title: Awards
permalink: /awards/
nav: true
nav_order: 4
images:
  lightbox2: true # 수상 사진 클릭 시 크게 보기
---

{% comment %}
  수상 내역은 _data/awards.yml 에서 관리합니다. 이 파일은 고칠 필요가 없습니다.
  위쪽 학기 탭을 누르면 그 기간의 수상만 보입니다. 수상이 없는 기간은 탭에 나오지 않습니다.
  주소 끝에 #2026-1 처럼 붙이면 그 기간이 바로 열립니다.
  수상 한 줄 = [날짜] [사진] [등급·대회명·수상자·Summary]. 사진·Summary 가 없어도 칸은 유지됩니다.
{% endcomment %}

{% assign awards = site.data.awards %}
{% assign top_grades = "대상,최우수상,1등" | split: "," %}
{% assign mid_grades = "우수상,2등,2등상" | split: "," %}

<nav class="awards-tabs" aria-label="기간 선택">
  {% for t in awards %}{% if t.items.size > 0 %}
    <a class="awards-tab" href="#{{ t.term }}" data-term="{{ t.term }}">{{ t.term }}</a>
  {% endif %}{% endfor %}
</nav>

{% for t in awards %}{% if t.items.size > 0 %}
<section class="awards-term" id="{{ t.term }}" data-term="{{ t.term }}">
  <h2 class="awards-term-title">{{ t.term }}</h2>
  <ol class="awards-list">
    {% for a in t.items %}
      <li class="award">
        <div class="award-when">
          {% if a.date %}<time datetime="{{ a.date | date: '%Y-%m-%d' }}">{{ a.date | date: '%b %d' }}</time>{% else %}<time>—</time>{% endif %}
        </div>

        {% comment %} 사진: images(여러 장) 또는 image(한 장). 첫 장이 대표, 나머지는 클릭 후 좌우로 넘겨 봄 {% endcomment %}
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
            {% comment %} teams(등급별 수상자)가 있으면 등급 라벨을 각 줄 앞에, 없으면 제목 위에 표시 {% endcomment %}
            {% if a.grade and a.teams == nil %}
              <p class="award-grades">
                {% for g in a.grade %}<span class="award-grade{% if top_grades contains g %} award-grade--top{% elsif mid_grades contains g %} award-grade--mid{% endif %}">{{ g }}</span>{% endfor %}
              </p>
            {% endif %}
            <h3 class="award-title">{{ a.title }}</h3>
            {% if a.teams %}
              <ul class="award-teams">
                {% for team in a.teams %}
                  <li>
                    <span class="award-grade{% if top_grades contains team.grade %} award-grade--top{% elsif mid_grades contains team.grade %} award-grade--mid{% endif %}">{{ team.grade }}</span>
                    <span class="award-members">{% for m in team.members %}<span>{{ m }}</span>{% endfor %}</span>
                  </li>
                {% endfor %}
              </ul>
            {% elsif a.members %}
              <p class="award-members">{% for m in a.members %}<span>{{ m }}</span>{% endfor %}</p>
            {% endif %}
          </div>
          {% comment %} Summary 는 사진 높이의 가운데에 오도록 남은 공간에서 세로 가운데 정렬 {% endcomment %}
          <div class="award-summary-wrap">
            <div class="award-summary{% unless a.comment %} award-summary--empty{% endunless %}">
              <span class="award-summary-label">Summary</span>
              {% if a.comment %}<p>{{ a.comment }}</p>{% endif %}
            </div>
            {% if a.slides %}
              {% if a.slides contains '://' %}{% assign slides_url = a.slides %}{% else %}{% assign slides_url = a.slides | relative_url %}{% endif %}
              <a class="award-slides" href="{{ slides_url }}" target="_blank" rel="noopener">발표자료 →</a>
            {% endif %}
          </div>
        </div>
      </li>
    {% endfor %}
  </ol>
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
    show(decodeURIComponent(location.hash.slice(1)));
  })();
</script>
