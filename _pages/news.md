---
layout: page
title: News
permalink: /news/
description: IBA의 공지와 소식
nav: false # 상단 메뉴에는 두지 않고, 홈의 NEWS! 제목에서 이 페이지로 연결
---

{% comment %}
  소식은 _news/ 폴더에 md 파일을 추가하거나, _projects/ 활동 파일에 news: true 와 date 를 적으면
  자동으로 이 페이지와 홈 화면 NEWS! 에 표시됩니다.
{% endcomment %}

{% include iba_news_list.liquid %}
