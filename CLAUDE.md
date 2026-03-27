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
  foot.html          # Scripts (Bootstrap JS, jQuery)
  page-heading.html  # Page title component
  course.html, thesis-topic.html, defended-thesis.html, research-papers.html
_layouts/            # Page layout templates
  index.html         # Landing page
  discover.html      # Discover section (about, team, media)
  research.html      # Research section
  teaching.html      # Teaching section
  lab.html           # Lab facilities
  blogpost.html      # Single blog post
  blog.html          # Blog listing
  research-area.html # Single research area
  project.html       # Single project
_posts/              # Blog posts (YYYY-MM-DD-title.md)
_projects/           # Project pages (snake_case.md, layout: project)
_research-areas/     # Research area pages (snake_case.md, layout: research-area)
css/                 # Stylesheets (Bootstrap 5 + main.css + fonts.css)
js/                  # JavaScript (Bootstrap 5 JS)
fonts/               # Custom Triakis font
images/              # Organized by type: team/, blog/, projects/, research/, etc.
files/               # Static documents (PDFs, etc.)
blog/ research/ teaching/ discover/ lab/  # Section index pages
```

## Tech Stack

- **Static site generator**: Jekyll 4.2.1
- **CSS framework**: Bootstrap 5
- **JS libraries**: jQuery 3.5.1 (CDN), Bootstrap 5 JS
- **Template language**: Liquid
- **Markdown flavor**: kramdown (inline HTML allowed)
- **Fonts**: Google Fonts (DM Sans, Barlow, Inter), FontAwesome 4.7 + v6, custom Triakis (OTF)
- **Analytics**: Google Analytics (G-LVQMEM9XNR)
- **Primary color**: `--primary: #40916C`

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
- **Component reuse**: Includes like `course.html`, `thesis-topic.html` render individual items from data loops
- **No CI/CD workflows**: GitHub Pages builds natively from the repo — no `.github/workflows/` needed
- **Minimal custom JS**: Interactivity relies on Bootstrap data attributes and CSS

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
| Change styles | Edit `css/main.css` |

## Deployment

- **Branch**: `master` (production)
- **Hosting**: GitHub Pages with custom domain `adl.cs.ut.ee` (via CNAME)
- **Deploy trigger**: Any push to `master` automatically rebuilds the site
- **No manual build step required** — GitHub Pages runs Jekyll build server-side
