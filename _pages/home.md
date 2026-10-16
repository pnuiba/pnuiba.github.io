---
layout: about
title: Home
permalink: /
subtitle: 부산대학교 지능형 경영 데이터 분석 학회

social: false # 하단에 메일·인스타그램 아이콘 표시 (_data/socials.yml)

# 홈 NEWS! 에 보여줄 소식 개수 (_data/awards.yml 에서 date 와 id 가 있는 수상 중 최신순)
news_limit: 5

announcements:
  enabled: false
---

<div class="iba-home">
  <svg width="0" height="0" aria-hidden="true" style="position:absolute">
    <defs>
      <filter id="iba-logo-transparent" color-interpolation-filters="sRGB">
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 20 0 -0.8" />
      </filter>
    </defs>
  </svg>
  <section class="home-hero" aria-label="IBA 소개">
    <img class="home-hero-background" src="{{ '/assets/img/home/network-background.gif' | relative_url }}" alt="" aria-hidden="true" width="1080" height="608">
    <img class="home-hero-logo" src="{{ '/assets/img/logo/logo-dark.png' | relative_url }}" alt="IBA — 부산대학교 지능형 경영 데이터 분석 학회" width="1028" height="599">
  </section>

  <section class="home-section home-about" id="home-about">
    <img class="home-wordmark" src="{{ '/assets/img/logo/wordmark.png' | relative_url }}" alt="Intelligent Business Analytics" width="1280" height="184">
    <div>
      <p class="home-eyebrow">WHO WE ARE</p>
      <h2>About us</h2>
      <p>부산대학교 경영 데이터 분석 학회 <strong>IBA</strong>는 Intelligent Business Analytics의 약자로, 비즈니스 애널리틱스에 인공지능을 접목한 <strong>지능형 경영 분석</strong>을 학습하는 학회입니다.</p>
    </div>
  </section>

  <section class="home-section home-goal">
    <p class="home-eyebrow">WHAT WE AIM FOR</p>
    <h2>Our Goal</h2>
    <img class="home-goal-image" src="{{ '/assets/img/intro/our-goal.png' | relative_url }}" alt="경영학적 도메인 지식, 프로그래밍 언어를 활용한 통계적 데이터 분석, 비즈니스 문제 해결 역량" loading="lazy">
    <p class="home-goal-description">경영학적 도메인을 바탕으로 Python과 데이터 마이닝을 배우고,<br class="home-goal-break">실제 비즈니스 문제를 해결하는 <strong>융합형 경영 인재</strong>로 성장합니다.</p>
  </section>

  <section class="home-section home-roadmap">
    <p class="home-eyebrow">LEARN. BUILD. CONNECT.</p>
    <h2>IBA Roadmap</h2>
    <ol class="home-roadmap-list">
      {% for step in site.data.roadmap %}
      <li>
        <div class="home-roadmap-heading"><span class="home-eyebrow">{{ step.stage }}</span><h3><img class="home-roadmap-image" src="{{ step.image | relative_url }}" alt="{{ step.title }}" loading="lazy"></h3></div>
        <div class="home-roadmap-body"><p>{{ step.description }}</p></div>
      </li>
      {% endfor %}
    </ol>
  </section>

  <section class="home-section home-curriculum" id="curriculum">
    <p class="home-eyebrow">START WITH THE BASICS</p>
    <h2>Curriculum</h2>
    {% for week in site.data.curriculum %}
    <details>
      <summary><span><strong>{{ forloop.index | prepend: '0' | slice: -2, 2 }}</strong> &nbsp; {{ week.title }}</span></summary>
      <ul>{% for item in week.items %}<li>{{ item }}</li>{% endfor %}</ul>
    </details>
    {% endfor %}
  </section>

  <section class="home-section home-updates">
    <div class="home-section-heading"><div><p class="home-eyebrow">LATEST UPDATES</p><h2 class="home-news-title">NEWS!</h2></div></div>
    {% assign award_news = "" | split: "," %}
    {% for term in site.data.awards %}
      {% comment %} 날짜(date)와 id 가 있는 수상만, 날짜 최신순으로 news_limit 개 {% endcomment %}
      {% assign announced_awards = term.items | where_exp: "a", "a.date and a.id" %}
      {% assign award_news = award_news | concat: announced_awards %}
    {% endfor %}
    {% assign award_news = award_news | sort: "date" | reverse %}
    {% comment %} 같은 날 같은 대회의 수상은 한 줄로 묶고 등급을 "대상, 최우수상" 처럼 높은 순으로 표시 {% endcomment %}
    {% assign news_groups = award_news | group_by_exp: "a", "a.date | date: '%Y-%m-%d' | append: a.title" %}
    {% assign grade_order = "대상,1등,최우수상,2등,2등상,우수상,3등,장려상" | split: "," %}
    <ul class="home-award-news">
      {% for group in news_groups limit: page.news_limit %}
      {% assign award = group.items | first %}
      {% assign grades = "" | split: "," %}
      {% assign members = "" | split: "," %}
      {% for a in group.items %}{% assign grades = grades | concat: a.grade %}{% endfor %}
      {% assign grades = grades | uniq %}
      {% assign sorted_grades = "" | split: "," %}
      {% for g in grade_order %}{% if grades contains g %}{% assign sorted_grades = sorted_grades | push: g %}{% endif %}{% endfor %}
      {% for g in grades %}{% unless grade_order contains g %}{% assign sorted_grades = sorted_grades | push: g %}{% endunless %}{% endfor %}
      {% assign top_grade = sorted_grades | first %}
      {% for a in group.items %}{% if a.grade contains top_grade %}{% assign award = a %}{% break %}{% endif %}{% endfor %}
      {% assign members = award.members | default: members %}{% for a in group.items %}{% if a.id != award.id %}{% assign members = members | concat: a.members %}{% endif %}{% endfor %}
      <li class="home-award-news-item">
        <time datetime="{{ award.date | date: '%Y-%m-%d' }}">{{ award.date | date: '%b %d, %Y' }}</time>
        <div class="home-award-news-body">
          <a class="news-title" href="{{ '/ibawards/' | relative_url }}#award-{{ award.id }}">{{ award.title | escape }} {{ sorted_grades | join: ', ' | escape }} 수상</a>
          {% if members.size > 0 %}<p class="home-award-news-members">{% for member in members %}<span>{{ member | escape }}</span>{% endfor %}{% if group.items.size == 1 and award.members_note %}<span>{{ award.members_note | escape }}</span>{% endif %}</p>{% endif %}
        </div>
      </li>
      {% else %}
      <li>아직 등록된 소식이 없습니다.</li>
      {% endfor %}
    </ul>
  </section>

  <section class="home-section home-contact">
    <div><p class="home-eyebrow">LET’S CONNECT</p><h2>Contact Freely</h2></div>
    {% assign c = site.data.contact %}
    <div class="home-contact-links">
      <a href="mailto:{{ c.email }}">{{ c.email }} ↗</a>
      <a href="https://www.instagram.com/{{ c.instagram }}/">Instagram / @{{ c.instagram }} ↗</a>
      {% for officer in c.officers %}{% if officer.contact != blank %}
        {% if officer.contact contains '@' %}{% assign contact_prefix = 'mailto:' %}{% else %}{% assign contact_prefix = 'tel:' %}{% endif %}
        <p class="contact-officer"><span class="contact-officer-label">{{ officer.role | escape }}{% if officer.name %} ({{ officer.name | escape }}, {{ officer.generation }}기){% endif %}:</span><a href="{{ officer.contact | remove: ' ' | prepend: contact_prefix | escape }}">{{ officer.contact | escape }}</a></p>
      {% endif %}{% endfor %}
    </div>
  </section>
</div>

<script>
(() => {
  function removeHomeGap() {
    const main = document.querySelector('.container[role="main"]');
    const navbar = document.getElementById('navbar');
    if (!main || !navbar) return;
    main.classList.remove('mt-5');
    main.style.setProperty('margin-top', '0', 'important');
    document.body.style.setProperty('padding-top', '0', 'important');
    const header = navbar.parentElement;
    header.style.position = 'sticky';
    header.style.top = '0';
    header.style.zIndex = '1030';
    navbar.classList.remove('fixed-top');
  }
  removeHomeGap();
  window.addEventListener('load', removeHomeGap, { once: true });
  function initHomeMotion() {
    const home = document.querySelector('.iba-home');
    if (!home || home.classList.contains('home-motion') || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = home.querySelectorAll('.home-hero-logo, .home-about > *, .home-goal > *, .home-roadmap > .home-eyebrow, .home-roadmap > h2, .home-roadmap > .home-section-description, .home-roadmap-list > li, .home-updates > *, .home-curriculum > *, .home-contact > *');
    targets.forEach((target, index) => {
      target.classList.add('home-reveal');
      target.style.setProperty('--reveal-delay', `${index % 3 * 100}ms`);
    });
    home.classList.add('home-motion');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else if (entry.boundingClientRect.top > window.innerHeight) {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      targets.forEach(target => observer.observe(target));
    }));
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomeMotion, { once: true });
  } else {
    initHomeMotion();
  }
})();
</script>
