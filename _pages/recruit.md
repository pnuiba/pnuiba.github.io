---
layout: page
title: Join Us
permalink: /recruit/
description: 지원 안내 · FAQ
nav: true
nav_order: 5
images:
  lightbox2: true # 모집요강 보기 버튼 → 포스터 크게 보기 + 좌우로 넘기기

# ---- 모집 정보: 새 기수 모집 때는 아래만 고치면 됩니다 ----
generation: "12기"
apply_period: "07.07 – 07.21"
form_url: https://app.notion.com/p/IBA-12-38e28da74e27802bb6abe4493e7f170e?source=copy_link # 지원서 양식
form_filename: "IBA지원서_12기_이름"
steps: # 전형 절차 (순서대로)
  - date: "07.07 – 07.21"
    name: "서류 지원"
    note: "지원서 양식 작성 → PDF로 저장 → 메일 제출"
  - date: "07.25 (오후)"
    name: "서류 발표"
    note: "합격자에게 면접 일정을 문자로 안내"
  - date: "07.30 – 07.31"
    name: "면접"
    note: "면접관 3 : 지원자 1 대면, 15~20분. 정답보다 논리적 사고 과정을 봅니다"
  - date: "08.01 (오후)"
    name: "최종 발표"
after: "08.04 OT 시작 · 매주 목요일 오후 세션 · 개인 노트북 필요" # 합격 후 활동
posters_title: "2026 12기 모집요강"
posters: # 모집요강 포스터 (폴더와 이 목록만 바꾸면 됨). 첫 장이 처음 열림
  - assets/img/recruit/2026-12th/poster-01.jpg
  - assets/img/recruit/2026-12th/poster-02.jpg
  - assets/img/recruit/2026-12th/poster-03.jpg
  - assets/img/recruit/2026-12th/poster-04.jpg
  - assets/img/recruit/2026-12th/poster-05.jpg
  - assets/img/recruit/2026-12th/poster-06.jpg
  - assets/img/recruit/2026-12th/poster-07.jpg
  - assets/img/recruit/2026-12th/poster-08.jpg
  - assets/img/recruit/2026-12th/poster-09.jpg
  - assets/img/recruit/2026-12th/poster-10.jpg
---

{% comment %}
  탭 2개(Awards 연도 탭과 같은 모양). 주소 끝 #faq 로 FAQ 탭을 바로 열 수 있습니다.
  지원 안내 = 항상 보이는 요약(기수·지원 기간·버튼) + 접는 항목 3개(지원 자격 / 전형 절차 / 합격 후 활동).
  모집 정보는 위 설정에서, 지원 자격 문구는 아래 본문에서, FAQ 는 _data/faq.yml 에서 고칩니다.
{% endcomment %}

{% assign c = site.data.contact %}

<nav class="awards-tabs join-tabs" aria-label="Join Us 탭">
  <a class="awards-tab" href="#apply" data-tab="apply">지원 안내</a>
  <a class="awards-tab" href="#faq" data-tab="faq">FAQ</a>
</nav>

<section class="join-panel" id="apply" data-tab="apply">

<div class="join-summary">
  <p class="join-summary-title">{{ page.generation }} 모집 <span>서류 지원 {{ page.apply_period }}</span></p>
  <p class="join-summary-actions">
    <a class="btn btn-primary" href="{{ page.form_url }}" target="_blank" rel="noopener">지원서 양식</a>
    {% for poster in page.posters %}
      <a {% if forloop.first %}class="btn"{% else %}hidden{% endif %} href="{{ poster | relative_url }}" data-lightbox="posters" data-title="{{ page.posters_title }} ({{ forloop.index }}/{{ forloop.length }})">{% if forloop.first %}모집요강 보기{% endif %}</a>
    {% endfor %}
  </p>
</div>

<details>
  <summary><span>지원 자격</span></summary>
  <p>부산대학교 학부 재학생 또는 휴학생 · 연속 2개 학기(방학 포함) 활동 가능 · 전공·학년 무관</p>
</details>

<details>
  <summary><span>전형 절차</span></summary>
  <ol class="join-steps">
    {% for s in page.steps %}
      <li>
        <span class="join-step-date">{{ s.date }}</span>
        <span class="join-step-name">{{ s.name }}</span>
        {% if s.note %}<span class="join-step-note">{{ s.note }}</span>{% endif %}
      </li>
    {% endfor %}
  </ol>
  <p class="join-steps-foot">
    파일명 <code>{{ page.form_filename }}</code> · 제출 <a href="mailto:{{ c.email }}">{{ c.email }}</a>
  </p>
</details>

<details>
  <summary><span>합격 후 활동</span></summary>
  <p>{{ page.after }}</p>
</details>

</section>

<section class="join-panel" id="faq" data-tab="faq">

{% for item in site.data.faq %}
<details>
  <summary><span>{{ item.q }}</span></summary>
  <p>{{ item.a }}</p>
</details>
{% endfor %}

</section>

<script>
  // 선택한 탭만 표시 (Awards 연도 탭과 같은 방식). JS가 꺼져 있으면 둘 다 보임.
  (function () {
    var tabs = document.querySelectorAll(".join-tabs .awards-tab");
    var panels = document.querySelectorAll(".join-panel");
    function show(name) {
      var exists = Array.prototype.some.call(panels, function (p) { return p.dataset.tab === name; });
      if (!exists) name = panels[0].dataset.tab;
      panels.forEach(function (p) { p.hidden = p.dataset.tab !== name; });
      tabs.forEach(function (t) {
        var on = t.dataset.tab === name;
        t.classList.toggle("is-active", on);
        if (on) t.setAttribute("aria-current", "true"); else t.removeAttribute("aria-current");
      });
    }
    tabs.forEach(function (t) {
      t.addEventListener("click", function (e) {
        e.preventDefault();
        history.replaceState(null, "", "#" + t.dataset.tab);
        show(t.dataset.tab);
      });
    });
    show(decodeURIComponent(location.hash.slice(1)));
  })();
</script>
