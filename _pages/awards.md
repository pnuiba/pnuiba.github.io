---
layout: page
title: Awards
permalink: /awards/
description: IBA는 계속해서 성장하고 있습니다.
chart:
  echarts: true
---

{% comment %}
  수상 내역은 _data/awards.yml 에서 관리합니다. 이 파일은 고칠 필요가 없습니다.
  차트와 연도별 목록이 모두 awards.yml 을 기준으로 자동 생성됩니다.
{% endcomment %}

{% assign total = 0 %}
{% for y in site.data.awards %}{% assign total = total | plus: y.items.size %}{% endfor %}

{{ site.data.awards.last.year }}년부터 지금까지 **총 {{ total }}건**의 수상 실적을 쌓았습니다. 막대에 마우스를 올리면 건수를 볼 수 있습니다.

```echarts
{
  "backgroundColor": "transparent",
  "tooltip": { "trigger": "axis", "formatter": "{b}년: {c}건" },
  "grid": { "left": 40, "right": 20, "top": 20, "bottom": 30 },
  "xAxis": {
    "type": "category",
    "data": [{% for y in site.data.awards reversed %}"{{ y.year }}"{% unless forloop.last %}, {% endunless %}{% endfor %}]
  },
  "yAxis": { "type": "value", "minInterval": 1 },
  "series": [
    {
      "name": "수상",
      "type": "bar",
      "barWidth": "50%",
      "itemStyle": { "color": "#1d3cf5", "borderRadius": [4, 4, 0, 0] },
      "data": [{% for y in site.data.awards reversed %}{{ y.items.size }}{% unless forloop.last %}, {% endunless %}{% endfor %}]
    }
  ]
}
```

{% for y in site.data.awards %}

<details {% if forloop.first %}open{% endif %}>
  <summary><span><strong>{{ y.year }}</strong> &nbsp;·&nbsp; {{ y.items.size }}건</span></summary>
  <ul>
    {% for item in y.items %}
      <li>{{ item }}</li>
    {% endfor %}
  </ul>
</details>
{% endfor %}
