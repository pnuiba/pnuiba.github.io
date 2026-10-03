source 'https://rubygems.org'

# 플러그인을 추가/삭제할 때는 이 파일과 _config.yml의 `plugins:` 목록을 함께 고쳐야 합니다.
# 한쪽에만 있으면 에러 없이 기능이 꺼집니다.

gem 'jekyll'

# Core plugins that directly affect site building
group :jekyll_plugins do
    gem 'jekyll-3rd-party-libraries'
    gem 'jekyll-cache-bust'
    gem 'jekyll-email-protect'
    gem 'jekyll-feed'
    gem 'jekyll-link-attributes'
    gem 'jekyll-minifier'
    gem 'jekyll-paginate-v2'
    gem 'jekyll-regex-replace'
    gem 'jekyll-scholar'     # 논문 기능은 쓰지 않지만 al_folio_core 레이아웃이 태그를 참조해서 필요합니다
    gem 'jekyll-sitemap'
    gem 'jekyll-socials'
    gem 'jekyll-tabs'
    gem 'jekyll-toc'
    gem 'jemoji'
end

group :other_plugins do
    gem 'css_parser'
    gem 'observer'       # used by jekyll-scholar
end

# Gems for al-folio plugins
group :al_folio_plugins do
    gem 'al_folio_core', '= 1.0.15'
    gem 'al_icons', '= 1.0.0'
    gem 'al_folio_upgrade', '= 1.0.3'

    gem 'al_analytics', '= 1.0.2'
    gem 'al_img_tools', '= 1.0.3'
    gem 'al_search', '= 1.0.3'
    gem 'al_charts', '= 1.0.1'

    gem 'al_email_protect', '= 1.0.1'
end
