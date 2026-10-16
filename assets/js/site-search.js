---
layout: null
---
/* Use current club data and current page anchors in the shared search dialog. */
(function () {
  const entries = [];
  function link(id, title, description, section, url) {
    entries.push({ id, title, description, section, handler: function () { window.location.href = url; } });
  }
  {% assign home = site.pages | where: 'permalink', '/' | first %}
  link('nav-home', {{ home.title | jsonify }}, '학회 소개 · 교육 커리큘럼 · 수상 소식', '페이지', {{ '/' | relative_url | jsonify }});
  {% assign pages = site.pages | sort: 'nav_order' %}
  {% for p in pages %}{% if p.nav and p.autogen == nil %}
  link({{ p.url | prepend: 'nav-' | jsonify }}, {{ p.title | jsonify }}, {{ site.data.search.pages[p.permalink] | default: '' | jsonify }}, '페이지', {{ p.url | relative_url | jsonify }});
  {% endif %}{% endfor %}
  link('home-curriculum', '교육 커리큘럼', 'Home · Curriculum', '안내', {{ '/#curriculum' | relative_url | jsonify }});
  link('faq-overview', '자주 묻는 질문', 'IBApply · FAQ', '안내', {{ '/ibapply/#faq' | relative_url | jsonify }});
  link('contact-overview', '문의 안내', '이메일 · Instagram', '문의', {{ '/ibapply/#contact' | relative_url | jsonify }});
  {% assign r = site.data.recruit %}
  link('upcoming-recruitment', {{ r.upcoming.generation | append: ' · ' | append: r.upcoming.status | jsonify }}, 'IBApply · 다음 모집', '모집', {{ '/ibapply/#apply' | relative_url | jsonify }});
  {% capture archive_url %}/ibapply/#recruit-{{ r.generation | remove: '기' }}{% endcapture %}
  link('closed-recruitment', {{ r.generation | append: ' · ' | append: r.status | jsonify }}, 'IBApply · 지난 모집요강 · 모집 종료', '모집', {{ archive_url | relative_url | jsonify }});
  {% for item in site.data.faq %}
  link('faq-{{ forloop.index }}', {{ item.q | jsonify }}, {{ item.a | jsonify }}, 'FAQ', {{ '/ibapply/#faq-' | append: forloop.index | relative_url | jsonify }});
  {% endfor %}
  {% assign generations = site.data.members | map: 'generation' | uniq | sort | reverse %}
  {% for generation in generations %}{% assign group = site.data.members | where: 'generation', generation %}{% for m in group %}
  {% capture member_description %}{{ generation }}기{% if m.department %} · {{ m.department }}{% endif %}{% for role in m.roles %} · {{ role }}{% endfor %}{% if m.graduate_school %} · {{ m.graduate_school }}{% endif %}{% endcapture %}
  {% capture member_url %}/members/#member-{{ generation }}-{{ forloop.index }}{% endcapture %}
  link('member-{{ generation }}-{{ forloop.index }}', {{ m.name | jsonify }}, {{ member_description | strip | jsonify }}, '멤버', {{ member_url | relative_url | jsonify }});
  {% endfor %}{% endfor %}
  {% assign activities = site.projects | sort: 'date' | reverse %}{% for project in activities %}
  {% capture activity_url %}/ibalbum/#activity-{{ project.slug }}{% endcapture %}
  link({{ project.slug | prepend: 'activity-' | jsonify }}, {{ project.title | jsonify }}, {{ project.description | default: '' | jsonify }}, 'IBAlbum', {{ activity_url | relative_url | jsonify }});
  {% endfor %}
  {% for term in site.data.awards %}
  {% assign full = term.items | where_exp: 'a', 'a.images or a.image or a.comment or a.slides' %}
  {% assign brief = term.items | where_exp: 'a', 'a.images == nil and a.image == nil and a.comment == nil and a.slides == nil' %}
  {% assign records = full | concat: brief %}{% for a in records %}
  {% capture record_id %}{% if a.id %}award-{{ a.id }}{% else %}award-{{ term.term }}-record-{{ forloop.index }}{% endif %}{% endcapture %}
  {% capture record_description %}{{ term.term }} · {% if a.teams %}{% for team in a.teams %}{{ team.grade }} · {{ team.members | join: ' · ' }} {% endfor %}{% else %}{{ a.grade | join: ' · ' }} · {{ a.members | join: ' · ' }}{% endif %}{% endcapture %}
  {% capture record_url %}/ibawards/#{{ record_id }}{% endcapture %}
  link({{ record_id | jsonify }}, {{ a.title | jsonify }}, {{ record_description | strip | jsonify }}, 'IBAwards', {{ record_url | relative_url | jsonify }});
  {% endfor %}{% endfor %}
  link('news', '소식', '학회 활동 · 지난 모집 안내', '안내', {{ '/news/' | relative_url | jsonify }});
  link('contact-email', '이메일 문의', {{ site.data.contact.email | jsonify }}, '문의', {{ site.data.contact.email | prepend: 'mailto:' | jsonify }});
  link('contact-instagram', 'Instagram', {{ site.data.contact.instagram | prepend: '@' | jsonify }}, '문의', {{ site.data.contact.instagram | prepend: 'https://www.instagram.com/' | append: '/' | jsonify }});
  link('contact-github', 'GitHub', {{ site.data.contact.github | jsonify }}, '문의', {{ site.data.contact.github | prepend: 'https://github.com/' | jsonify }});
  {% for officer in site.data.contact.officers %}{% if officer.contact != blank %}
  {% capture officer_description %}{{ officer.name }} · {{ officer.generation }}기 · {{ officer.contact }}{% endcapture %}
  link('contact-officer-{{ forloop.index }}', {{ officer.role | append: ' 문의' | jsonify }}, {{ officer_description | strip | jsonify }}, '문의', {{ '/ibapply/#contact' | relative_url | jsonify }});
  {% endif %}{% endfor %}
  {% if site.enable_darkmode %}
  [['light', '밝은 모드'], ['dark', '어두운 모드'], ['system', '시스템 설정 따르기']].forEach(function (item) {
    entries.push({ id: 'theme-' + item[0], title: item[1], description: '', section: '화면 설정', handler: function () { setThemeSetting(item[0]); } });
  });
  {% endif %}
  const search = document.querySelector('ninja-keys');
  if (!search) return;
  search.setAttribute('placeholder', '페이지, 이름, 활동, 수상 내역 검색');
  customElements.whenDefined('ninja-keys').then(function () { search.data = entries; });
})();
