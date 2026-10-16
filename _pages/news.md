---
layout: page
title: News
permalink: /news/
description: IBA의 공지와 소식
nav: false # 상단 메뉴에는 두지 않고 통합 검색에서 접근
---

{% comment %}
  소식은 _news/ 폴더에 md 파일을 추가하거나, _projects/ 활동 파일에 news: true 와 date 를 적으면
  자동으로 이 페이지에 표시됩니다. 홈 화면 NEWS!는 _data/awards.yml의 수상 소식을 표시합니다.
{% endcomment %}

{% include iba_news_list.liquid %}
