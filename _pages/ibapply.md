---
layout: page
title: IBApply
permalink: /ibapply/
nav: true
nav_order: 5
images:
  lightbox2: true
---

{% assign r = site.data.recruit %}
{% assign c = site.data.contact %}

<div class="apply-page">
  <section class="apply-intro" id="apply" aria-labelledby="apply-heading">
    <div>
      <div class="apply-generation-heading">
        <h2 id="apply-heading">{{ r.upcoming.generation | escape }}</h2>
        <span class="apply-status apply-status-upcoming">{{ r.upcoming.status | escape }}</span>
      </div>
    </div>
  </section>

  <details class="apply-archive" id="recruit-{{ r.generation | remove: '기' }}">
    <summary>
      <span class="apply-archive-heading"><span class="apply-archive-generation">{{ r.generation | escape }}</span><span class="apply-status apply-status-closed">{{ r.status | escape }}</span></span>
      <span class="apply-archive-label">지난 모집 안내</span>
    </summary>
    <div class="apply-archive-content">
      <p class="apply-period">서류 지원 <span>{{ r.apply_period }}</span></p>
      <div class="apply-actions">
        {% for poster in r.posters %}
          <a {% if forloop.first %}class="btn"{% else %}hidden{% endif %} href="{{ poster | relative_url }}" data-lightbox="posters" data-title="{{ r.posters_title | escape }} ({{ forloop.index }}/{{ forloop.length }})">{% if forloop.first %}지난 모집요강 보기{% endif %}</a>
        {% endfor %}
        <a class="apply-previous-form" href="{{ r.form_url }}" target="_blank" rel="noopener">지난 지원서 양식 <span aria-hidden="true">↗</span></a>
      </div>
      <h3 class="apply-archive-subheading">전형 일정</h3>
      <ol class="apply-steps">
        {% for step in r.steps %}
          <li>
            <span class="apply-step-number" aria-hidden="true">0{{ forloop.index }}</span>
            <div class="apply-step-body">
              <div class="apply-step-heading"><h3>{{ step.name | escape }}</h3><span class="apply-step-date">{{ step.date | escape }}</span></div>
              {% if step.note %}<p>{{ step.note | escape }}</p>{% endif %}
            </div>
          </li>
        {% endfor %}
      </ol>
      <div class="apply-submission">
        <p class="apply-submission-label">당시 제출 안내</p>
        <p><span>제출처</span><a href="mailto:{{ c.email }}">{{ c.email }}</a></p>
        <p><span>파일명</span><code>{{ r.form_filename | escape }}</code></p>
      </div>
      <h3 class="apply-archive-subheading">합격 후 활동</h3>
      <p class="apply-after">{{ r.after | escape }}</p>
    </div>
  </details>

  <section class="apply-section" aria-labelledby="apply-eligibility-heading">
    <h2 id="apply-eligibility-heading">지원 자격</h2>
    <ul class="apply-eligibility">
      {% for item in r.eligibility %}<li>{{ item | escape }}</li>{% endfor %}
    </ul>
  </section>

  <section class="apply-section apply-faq" id="faq" aria-labelledby="apply-faq-heading">
    <h2 id="apply-faq-heading">FAQ</h2>
    <div>
      {% for item in site.data.faq %}
        <details id="faq-{{ forloop.index }}">
          <summary><span>{{ item.q | escape }}</span></summary>
          <p>{{ item.a | escape }}</p>
        </details>
      {% endfor %}
    </div>
  </section>

  <section class="apply-section apply-contact" id="contact" aria-labelledby="apply-contact-heading">
    <h2 id="apply-contact-heading">문의</h2>
    <div class="apply-contact-links">
      <a href="mailto:{{ c.email }}">{{ c.email }} <span aria-hidden="true">↗</span></a>
      <a href="https://www.instagram.com/{{ c.instagram }}/" target="_blank" rel="noopener">Instagram @{{ c.instagram }} <span aria-hidden="true">↗</span></a>
      {% for officer in c.officers %}{% if officer.contact != blank %}
        {% if officer.contact contains '@' %}{% assign contact_prefix = 'mailto:' %}{% else %}{% assign contact_prefix = 'tel:' %}{% endif %}
        <p class="contact-officer"><span class="contact-officer-label">{{ officer.role | escape }}{% if officer.name %} ({{ officer.name | escape }}, {{ officer.generation }}기){% endif %}:</span><a href="{{ officer.contact | remove: ' ' | prepend: contact_prefix | escape }}">{{ officer.contact | escape }}</a></p>
      {% endif %}{% endfor %}
    </div>
  </section>
</div>

<script>
  (function () {
    function revealLinkedAnswer() {
      var id;
      try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
      var target = document.getElementById(id);
      if (!target || target.tagName !== 'DETAILS') return;
      target.open = true;
      requestAnimationFrame(function () { target.scrollIntoView({ block: 'start' }); });
    }
    revealLinkedAnswer();
    window.addEventListener('hashchange', revealLinkedAnswer);
  })();
</script>
