# CLAUDE.md - AI Assistant Guide for UT-ADL Homepage

## Project Overview

This is the **Autonomous Driving Lab (ADL)** homepage at the University of Tartu, hosted at [adl.cs.ut.ee](https://adl.cs.ut.ee/). It is a **Jekyll 4.2.1** static site deployed via **GitHub Pages** — every push to `master` triggers an automatic rebuild and deploy.

## Quick Reference

```bash
# Install system deps (Ubuntu)
sudo apt-get install ruby-full ruby-bundler build-essential zlib1g-dev

# Install Jekyll dependencies
bundler install

# Run local development server (http://localhost:4000/)
bundler exec jekyll serve
```

Note: `_config.yml` changes require a server restart.

## Directory Structure

```
_config.yml          # Jekyll configuration (collections, plugins, headers)
_data/               # YAML data files — primary content source
  navigation.yml     # Site menus and footer sitemap
  team.yml           # Team members (name, position, group, email, image)
  research-papers.yml# Publications (title, conference, authors, year, links)
  courses.yml        # Course listings (type, title, code, ECTS, lecturer)
  thesis-topics.yml  # Available thesis topics with availability levels
  defended-theses.yml# Completed theses (title, supervisor, author, year)
  media.yml          # News articles and videos (type, url, language, date)
_includes/           # Reusable HTML template fragments
  head.html          # <head> section (meta, CSS, analytics, fonts)
  main-navigation-bar.html  # Top navbar
  subnavigation-bar.html    # Section sub-navigation
  footer.html        # Site footer
  foot.html          # End-of-body scripts (currently empty)
  page-heading.html  # Page title component
  thesis-topic.html, defended-thesis.html, research-papers.html
_layouts/            # Page layout templates (all derive from default → page)
  default.html       # Base layout (header + footer only, used by index)
  page.html          # Standard page (heading, optional subnav, content wrapper)
  text.html          # Long-form content — extends page with 9/12 column width
  blog.html          # Blog listing — extends text
  blogpost.html      # Blog post — extends text, adds date/author
  research-area.html # Research area — extends page, adds sidebar + slider
  project.html       # Project — extends page, adds sidebar + slider
  index.html         # Landing page (hero slider, partners)
_posts/              # Blog posts (YYYY-MM-DD-title.md)
_projects/           # Project pages (snake_case.md, layout: project)
_research-areas/     # Research area pages (snake_case.md, layout: research-area)
css/                 # Stylesheets (tailwind.css = compiled Tailwind v2.1.4, site.css = custom styles)
js/                  # JavaScript (site.js — filters, slider, modals, nav)
fonts/               # Custom Triakis font (OTF, WOFF, WOFF2)
assets/              # SVG icons, logos, separators (from Voog theme)
images/              # Organized by type: team/, blog/, projects/, research/, etc.
files/               # Static documents (PDFs, etc.)
blog/ research/ teaching/ discover/ lab/  # Section index pages
```

## Tech Stack

- **Static site generator**: Jekyll 4.2.1
- **CSS framework**: Tailwind CSS v2.1.4 (compiled in `css/tailwind.css`) + custom styles in `css/site.css`
- **JS**: Custom `site.js` (vanilla JS — client-side filtering, slider, video modals, hotspots, mobile nav)
- **Template language**: Liquid
- **Markdown flavor**: kramdown (inline HTML allowed)
- **Fonts**: Google Fonts (Barlow, Inter, DM Sans), FontAwesome v6 (kit), custom Triakis (OTF/WOFF/WOFF2)
- **Icons**: SVG mask icons via CSS (from Voog theme) + FontAwesome for some content pages
- **Analytics**: Google Analytics (G-LVQMEM9XNR)
- **Primary color**: `--primary: #009469`

## Content Management Conventions

### Data files (`_data/`)

Most site content is managed through YAML data files. When editing:
- Maintain existing YAML formatting and field order
- Pay attention to casing and spaces in `research_area` fields — they must match exactly across files (e.g., `Behavior prediction`, `Motion planning`, `Learned driving`)
- Dates use `YYYY-MM-DD` format
- Team member `group` values: `lead`, `team lead`, `engineer`, `student`
- Course `type` values: `Introductory course`, `Related subtasks`, `Related fields`
- Media `type` values: `video`, `article`; `language`: `ee` or `en`

### Blog posts (`_posts/`)

- Filename: `YYYY-MM-DD-slug-title.md`
- Required front matter: `layout: blogpost`, `title`, `date`, `image`, `alt`, `permalink: /blog/:title/`, `meta`, `language` (`ee`/`en`), `author`
- Images go in `images/blog/`

### Research areas (`_research-areas/`)

- Filename: `snake_case.md`
- Required front matter: `layout: research-area`, `title`, `icon`, `research_lead`, `lead_image`, `lead_description`, `lead_email`
- Optional: `webURL`, `twitter`, `facebook`, `instagram`
- Related papers are auto-filtered by matching `research_area` in `research-papers.yml`

### Projects (`_projects/`)

- Filename: `snake_case.md`
- Required front matter: `layout: project`, `title`
- Optional: `category`, `webURL`, `twitter`, `facebook`, `instagram`

### Images

Store in the appropriate subdirectory under `images/`:
- `images/team/` — Team member photos
- `images/blog/` — Blog post images
- `images/projects/` — Project images
- `images/research/` — Research area images
- `images/landing/` — Landing page carousel images

## Collections (defined in `_config.yml`)

| Collection | Directory | Permalink Pattern |
|---|---|---|
| `research-areas` | `_research-areas/` | `/research/research-areas/:path/` |
| `projects` | `_projects/` | `/research/projects/:path/` |

## Key Patterns

- **Data-driven rendering**: Templates iterate over `site.data.*` YAML files using Liquid `{% for %}` loops
- **Active menu highlighting**: Navigation uses `prefix` field matched against current URL
- **Client-side filtering**: `site.js` uses `data-filter-group` / `data-filter-value` attributes on `.menu-tags` containers to filter `.filter-item` elements
- **Layout hierarchy**: `default` → `page` → `text`. All section pages use `layout: page` with `subtitle` (heading) and `subnav` (navigation group) front matter. Use `layout: text` for long-form/markdown pages (9/12 column). Blog and blogpost extend `text`; research-area and project extend `page`
- **Content wrapper**: `.content-wrapper` class (max-width 1180px, 85% width, centered) used consistently across all layouts
- **No CI/CD workflows**: GitHub Pages builds natively from the repo — no `.github/workflows/` needed

## Common Tasks

| Task | Action |
|---|---|
| Add a team member | Edit `_data/team.yml`, add photo to `images/team/` |
| Add a publication | Edit `_data/research-papers.yml` |
| Add a blog post | Create `_posts/YYYY-MM-DD-title.md` with proper front matter |
| Add a thesis topic | Edit `_data/thesis-topics.yml` |
| Add a defended thesis | Edit `_data/defended-theses.yml` |
| Add a course | Edit `_data/courses.yml` |
| Edit navigation | Edit `_data/navigation.yml` |
| Add a research area | Create `_research-areas/name.md` with proper front matter |
| Add a project | Create `_projects/name.md` with proper front matter |
| Modify page layout | Edit the relevant file in `_layouts/` |
| Change styles | Edit `css/site.css` (custom styles) or `css/tailwind.css` (framework utilities) |

## Content Conventions

### Blog Post Images
- The `image` front matter field is used only for blog listing thumbnails, NOT displayed in the post body
- Posts that need a header image must include it explicitly as inline markdown/HTML in the content

### Side-by-Side Images
- For 2 images: use markdown table `| ![](img1) | ![](img2) |`
- For 2+ images needing equal height: use `<div style="display: flex; gap: 8px;">` with `object-fit: cover` and fixed height
- For gallery-style clickable images: wrap in `<a href="full-size-url" target="_blank">`
- The compiled Tailwind CSS does NOT include `grid-cols-2` without a breakpoint prefix — use tables or flex instead

### Embedded Videos
- Use responsive sizing: `style="width: 100%; aspect-ratio: 16/9;"` instead of fixed `width`/`height` attributes

## Deployment

- **Branch**: `master` (production)
- **Hosting**: GitHub Pages with custom domain `adl.cs.ut.ee` (via CNAME)
- **Deploy trigger**: Any push to `master` automatically rebuilds the site
- **No manual build step required** — GitHub Pages runs Jekyll build server-side
