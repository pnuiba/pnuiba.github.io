# Agent guide — PNU IBA homepage

Club website for PNU IBA, built on the al-folio v1 Jekyll starter and deployed to GitHub Pages via GitHub Actions (`.github/workflows/build.yml`). Content tasks map to files as described in the Rules below.

## Rules

- **Content lives in data/markdown, not templates.** Prefer `_data/*.yml`, `_pages/*.md`, `_news/`, `_projects/`. Pages read data via Liquid, so lists (awards, members, FAQ, curriculum) should be edited in YAML, not in the page.
- **No local theme overrides unless unavoidable.** Layouts/includes/Sass come from the `al_folio_core` gem (`theme: al_folio_core`). Creating `_layouts/`, `_includes/`, or `_sass/` shadows gem files; if you must, run `bundle exec al-folio upgrade overrides audit` and commit `.al-folio-overrides.yml`. Page-level `<script>` / `_styles` front matter is the preferred extension point.
- **`Gemfile` and `_config.yml` `plugins:` must agree.** A plugin in only one list silently does nothing.
- **Keep `jekyll-scholar`.** Unused, but `al_folio_core`'s `page`/`post` layouts contain `{% bibliography %}`, so removing it breaks the build.
- **Current overrides:** only `_includes/header.liquid` — it links `assets/css/theme.css` + Pretendard and renders the brand block (bold "IBA" + small `brand_subtitle`, every page). Tracked in `.al-folio-overrides.yml`.
- **Styling lives in `assets/css/theme.css`** (shadcn/ui tokens → al-folio `--global-*` variables → component styles). Change colors via tokens, not per-page CSS. Note al-folio's JS adds `.table` to every `<table>`, so don't rely on `:not(.table)`.
- `jekyll serve` file watching does not fire in this repo path; use `--force_polling`.
- `baseurl` is `""` (root deploy). Local server: `http://localhost:4000/`.
- Site language is Korean (`lang: ko`). Nav labels and page titles are English; descriptions and body text are Korean. The nav is flat (no dropdowns): Home, About, Members, Activities, Awards, Join Us — set via `nav: true` + `nav_order` in each page. Home = intro + NEWS + curriculum + 1-year roadmap, Activities = gathering cards (`_projects/`), Join Us = application + FAQ + contact. A project with `news: true` + `date` also appears in the NEWS list (`_includes/iba_news_list.liquid`); old URLs redirect via `_pages/redirects/`.
- Do not put personal phone numbers or other private info in text or images. Contact info lives in `_data/contact.yml`; its `phone` is the club's official contact number and is intentionally public.
- White-on-transparent logo/diagram images are invisible on the light theme; use the dark-background versions in `assets/img/`.

## Commands

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll build   # must pass before committing
bundle exec jekyll serve
```

Ruby version is pinned in `.ruby-version` (3.3.5). On macOS with Homebrew: `export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"`.
