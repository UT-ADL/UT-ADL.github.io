---
name: voog-kit
description: Work with Voog Developer Kit — templates, Liquid tags, filters, objects, components, JavaScript toolkits, design editor, and CLI tools for building and editing Voog CMS themes.
argument-hint: "<question or task> — e.g. 'how to make an editable content area', 'list all page object properties', 'create a blog layout'"
allowed-tools:
  - WebFetch
  - Bash
  - Read
  - Write
  - Edit
  - Grep
  - Glob
---

# Voog Developer Kit Skill

Reference for building and editing Voog CMS themes and templates. The live site at **adl.cs.ut.ee** runs on Voog CMS.

## Request: $ARGUMENTS

---

## CLI Toolkit

Install: `gem install voog-kit` (requires Ruby 2.7+)

### File Structure
```
assets/          # Fonts, other files
components/      # Reusable template snippets
images/          # Template images
javascripts/     # JS files
layouts/         # Page templates
stylesheets/     # CSS files
manifest.json    # Layout metadata
.voog            # Config (host, api_token)
```

### Commands
| Command | Description |
|---------|-------------|
| `kit init` | Initialize folder (`empty`, `new`, `new <git-url>`) |
| `kit pull` | Download layouts/assets from site |
| `kit push` | Upload local changes |
| `kit watch` | Auto-push on file changes |
| `kit remove` | Remove files locally + remotely |
| `kit manifest` | Generate manifest.json (`--remote` for remote data) |
| `kit check` | Cross-check manifest vs local files |

### .voog Config
```ini
[mysite.voog.com]
  host=mysite.voog.com
  api_token=YOUR_TOKEN
  overwrite=false
  protocol=https
```

---

## Template Language

Voog uses **Liquid** with custom extensions.

### Output: `{{ variable }}`
```liquid
{{ page.title }}
{{ article.created_at | date: "%d.%m.%Y" }}
```

### Tags: `{% tag %}`
```liquid
{% if editmode %}...{% endif %}
{% for item in collection %}...{% endfor %}
```

---

## Layout Types

| Type | Description | Key Objects |
|------|-------------|-------------|
| **Page** | Standard pages | `page` |
| **Blog and News** | Article listing | `blog`, `articles` |
| **Blog Article** | Single article | `article` |
| **Elements** | Database entry listing | `elements` |
| **Element** | Single database entry | `element` |
| **Error 401** | Login screen | |
| **Error 404** | Error page | |

---

## Global Variables

| Variable | Description |
|----------|-------------|
| `editmode` | `true` when logged into CMS |
| `previewmode` | `true` only in preview mode |
| `editor_locale` | Editor UI language code (nil when logged out) |
| `images_path` | `/images` |
| `javascripts_path` | `/javascripts` |
| `stylesheets_path` | `/stylesheets` |
| `assets_path` | `/assets` |

---

## Objects Reference

### Site Object

**General:**
| Property | Description |
|----------|-------------|
| `site.analytics` | Statistics JS (place at end of body) |
| `site.stats_header` | Header code from settings (place in `<head>`) |
| `site.author` | Site author |
| `site.url` | Site URL |
| `site.header` | Site header (use with `{% editable %}`) |
| `site.data` | Custom data object |
| `site.has_favicon?` | Favicon boolean |
| `site.static_asset_host` | Static asset server URL |
| `site.search.enabled` | Search enabled boolean |
| `site.to_json` | JSON serialization |

**Title:**
| Property | Description |
|----------|-------------|
| `site.title_separator` | Custom separator (default "--") |
| `site.title_format` | Override: `page_site`, `site_page`, `page` |

**Blogs:**
| Property | Description |
|----------|-------------|
| `site.blogs` | All visible blogs in current language |
| `site.latest_articles` | 10 newest articles |
| `site.latest_n_articles` | N newest (e.g., `latest_3_articles`) |

**Languages:**
| Property | Description |
|----------|-------------|
| `site.languages` | Published language environments |
| `site.has_many_languages?` | Multiple languages boolean |

**Tags:**
| Property | Description |
|----------|-------------|
| `site.all_tags` | All tags (cross-language) |
| `site.language_tags` | Tags for current language |

**Menus:**
| Property | Description |
|----------|-------------|
| `site.root_item` | Top-level menu item (home page) |
| `site.menuitems` | First-level menu items |
| `site.visible_menuitems` | Non-hidden menu items |
| `site.hidden_menuitems` | Hidden items |
| `site.menuitems_with_hidden` | All items |

Menu methods support `_with_data` suffix (includes `.data`) and `_on_level_N` suffix (1-9).

### Page Object

**Identity:**
| Property | Description |
|----------|-------------|
| `page.id` / `page.page_id` | Page identifier |
| `page.node_id` | Node identifier |
| `page.level` | Depth in site tree |
| `page.parent` | Parent page (nil for top-level) |
| `page.content_type` | "page", "blog", "elements", "link", etc. |

**Display:**
| Property | Description |
|----------|-------------|
| `page.title` | Page title |
| `page.menu_title` | Menu title (fallback to title) |
| `page.full_title` | Complete `<title>` value |
| `page.layout_title` | Layout name |
| `page.description` | Meta description |
| `page.keywords` | Keywords (page + site) |

**URLs:**
| Property | Description |
|----------|-------------|
| `page.url` | Absolute URL |
| `page.path` | Relative path |
| `page.path_with_lang` | Path with language code |

**Status:**
| Property | Description |
|----------|-------------|
| `page.blog?` | Blog page boolean |
| `page.elements_page?` | Elements page boolean |
| `page.link?` | External link boolean |
| `page.hidden?` | Hidden from menu boolean |
| `page.private?` | Password-protected boolean |

**Other:**
| Property | Description |
|----------|-------------|
| `page.image` / `page.image?` | Attached image / boolean |
| `page.language_code` | 2-char language code |
| `page.data` | Custom data object |
| `page.menuitem` | Menu item object |
| `page.created_at` / `page.updated_at` | Timestamps |
| `page.to_json` | JSON serialization |

### Article Object

| Property | Description |
|----------|-------------|
| `article.id` | Identifier |
| `article.title` | Heading |
| `article.body` | Full content |
| `article.excerpt` | Summary |
| `article.description` | Description field |
| `article.url` | Full URL |
| `article.page` | Parent blog page |
| `article.author` | Person object |
| `article.published?` | Published boolean |
| `article.newer` / `article.older` | Adjacent articles |
| `article.image` / `article.image?` | Image / boolean |
| `article.comments` | Published comments |
| `article.comments_count` | Comment count |
| `article.comments_url` | POST endpoint for comments |
| `article.tags` | Tag objects |
| `article.tag_names` | Tag name array |
| `article.data` | Custom data |
| `article.created_at` / `article.updated_at` | Timestamps |
| `article.to_json` | JSON serialization |

### Element Object

| Property | Description |
|----------|-------------|
| `element.element_definition_id` | Definition model ID |
| `element.title` | Title |
| `element.url` | URL path |
| `element.path` | Slug |
| `element.position` | Order on page |
| `element.page` / `element.page_id` | Page object/ID |
| `element.model_name` | Model name |
| `element.model_fields` | Iterable properties (key, title, data_type, value) |
| `element.<property>` | User-defined properties directly accessible |
| `element.to_json` | JSON serialization |

### Menu Item Object

| Property | Description |
|----------|-------------|
| `item.title` | Page title |
| `item.url` / `item.path` | URL / path |
| `item.page` | Related page object |
| `item.current?` | Is currently displayed page |
| `item.selected?` | Current page or descendant is active |
| `item.children` | Visible child items |
| `item.children?` | Has children boolean |
| `item.hidden?` / `item.private?` / `item.blog?` | Status booleans |
| `item.data` | Custom data (requires `_with_data` methods) |

### Image Object

| Property | Description |
|----------|-------------|
| `image.url` | Full URL |
| `image.width` / `image.height` | Dimensions |
| `image.content_type` | MIME type |
| `image.sizes` | Array of variants (original, 2048px, 1280px, 600px) |
| `image.thumbnail` | Smallest variant |

### Language Object

| Property | Description |
|----------|-------------|
| `language.code` | 2-char code |
| `language.title` | Display name |
| `language.selected?` | Active boolean |
| `language.url` | Current page in this language |

### Other Objects

**Blog:** `blog.articles`, `blog.tags`, `blog.rss_url`, `blog.latest_n_articles`

**Comment:** `comment.author`, `comment.body`, `comment.created_at`

**Tag:** `tag.id`, `tag.name`, `tag.path`

**Person:** `person.name`, `person.email`, `person.firstname`, `person.lastname`

**Content:** `content.name`, `content.content_type`, `content.parent`

**Data:** Access via dot notation: `{{ page.data.bgcolor }}`. Supports nested JSON and iteration.

---

## Tags Reference

### Content Tags

#### `content` — Editable content area
```liquid
{% content %}                              {# default "body" area #}
{% content name="sidebar" %}               {# named area #}
{% content name="footer" xpage="true" %}   {# cross-page (shared per language) #}
{% content bind="Article" %}               {# bind to article #}
{% content bind="Element" %}               {# bind to element #}
{% content single="plaintext" placeholder="Enter text..." %}
```

**Attributes:** `name`, `bind` ("Article"/"Element"/variable), `xpage` ("true"), `readonly` ("true"), `single` ("plaintext"/"text"), `placeholder`, `invisible` ("true"), `title`, `title_tooltip`

#### `contentblock` — Content with default
```liquid
{% contentblock name="slogan" publish_default_content="true" %}
  Default content here
{% endcontentblock %}
```

#### `xcontent` — Cross-page content shorthand
```liquid
{% xcontent name="footer" %}
```

#### `editable` — Inline editing
```liquid
{% editable article.title %}
{% editable article.body %}
{% editable article.excerpt %}
{% editable article.tags %}
{% editable element.title %}
{% editable element.custom_field %}
{% editable site.header %}
```

### Navigation Tags

#### `menulink` — Navigation link
```liquid
{% menulink item %}
{% menulink item wrapper-tag="li" selected-class="active" current-class="current" %}
```

#### `menuadd` — Add page button
```liquid
{% menuadd parent=menuitem layout_title="Product" label="Add product" %}
```

#### `menubtn` — Hidden items button
```liquid
{% menubtn site.hidden_menuitems %}
```

### Blog Tags

#### `blogcontext` — Blog context block
```liquid
{% blogcontext "my_blog" %}
  {{ blog.rss_url }}
{% endblogcontext %}
```

#### `commentform` — Comment form
```liquid
{% commentform %}
  <input name="author">
  <textarea name="body"></textarea>
  <button type="submit">Submit</button>
{% endcommentform %}
```

#### `addbutton` — New article/element button
```liquid
{% addbutton %}
{% addbutton element_type="Team Member" %}
```

### Element Tags

#### `elementscontext` — Query elements
```liquid
{% elementscontext edicy_model="Product" category="Books" %}
  {% for el in elements %}
    {{ el.title }}
  {% endfor %}
{% endelementscontext %}
```

**Params:** `edicy_page_path`, `edicy_page_path_prefix`, `edicy_model`, `edicy_all_languages`, plus any element property for filtering. Supports API syntax: `q.element.values.field.$in="a,b"`.

### Control Flow

```liquid
{% if condition %}...{% elsif %}...{% else %}...{% endif %}
{% unless condition %}...{% endunless %}
{% case variable %}{% when "value" %}...{% else %}...{% endcase %}
{% for item in array %}...{% endfor %}        {# limit, offset, reversed #}
{% cycle 'odd', 'even' %}
{% ifchanged %}...{% endifchanged %}
```

**forloop:** `forloop.index`, `forloop.index0`, `forloop.first`, `forloop.last`, `forloop.length`, `forloop.rindex`

### Variable Tags

```liquid
{% assign var = "value" %}
{% capture var %}...content...{% endcapture %}
```

### Collection Tags

```liquid
{% grouped groups by category in elements %}...{% endgrouped %}
{% reorder elements by title %}
```

### Include & Load

```liquid
{% include "Header" %}
{% include "card" item: article, show_date: true %}

{% load articles to "posts" q.page.id=page.id s="article.created_at.$desc" limit=10 %}
{% load articles to "tagged" tag="featured" limit=5 %}
{% load media_set to "gallery" q.media_set.title="Photos" %}
```

**Loadable types:** `article`/`articles`, `media_set`/`media_sets`, `buy_button`/`buy_buttons`, `product_widget`/`product_widgets`

### Asset & HTML Tags

```liquid
{% stylesheet_link "style.css" %}
{% stylesheet_link "print.css" media="print" %}
{% sitejs_include %}                          {# REQUIRED in all layouts #}
{% rss_link %}
<title>{% title %}</title>

{% image "images/logo.png" alt="Logo" class="logo" loading="lazy" %}
{% image article.image target_width=600 %}
{% gallery product layout="slider" %}
```

### Auth Tags
```liquid
{% login %}
{% loginblock %}<img src="...">{% endloginblock %}
```

### SEO Tags
```liquid
{% sd_breadcrumbs %}
{% sd_product %}
```

### Editor Tags
```liquid
{% editorjsblock %}
  <script>
    Edicy.jQuery(function($) { /* edit-mode JS */ });
  </script>
{% endeditorjsblock %}
```

---

## Filters Reference

### Text Filters
| Filter | Example |
|--------|---------|
| `append: "str"` | `{{ "foo" | append: "bar" }}` → "foobar" |
| `prepend: "str"` | Prefix string |
| `capitalize` | First letter uppercase |
| `downcase` / `upcase` | Case conversion |
| `strip` / `lstrip` / `rstrip` | Trim whitespace |
| `strip_html` | Remove HTML tags |
| `strip_newlines` | Remove newlines |
| `newline_to_br` | `\n` → `<br />` |
| `escape` / `escape_once` | HTML escape |
| `truncate: N` | Shorten to N chars (default suffix "...") |
| `truncate_html: N` | Truncate preserving HTML |
| `truncatewords: N` | Shorten to N words |
| `split: ","` | String to array |
| `replace: "a", "b"` / `replace_first` | String replacement |
| `remove: "str"` / `remove_first` | Remove occurrences |
| `slice: start, length` | Substring extraction |
| `url_encode` / `url_decode` | URL encoding |
| `default: "fallback"` | Fallback for empty/nil |
| `to_num` | String to number |

### Date Filters
| Filter | Example |
|--------|---------|
| `date: "%d.%m.%Y"` | strftime format |
| `format_date: "long"` | Locale-aware ("default", "long", "short", "long_without_year") |
| `format_time: "short"` | Locale-aware time |

### Math Filters
`plus`, `minus`, `times`, `divided_by`, `modulo`, `ceil`, `floor`, `round`, `at_least`, `at_most`

### Array Filters
| Filter | Description |
|--------|-------------|
| `first` / `last` | First/last element |
| `size` | Array length |
| `sort: "prop"` | Sort (case-sensitive) |
| `sort_natural: "prop"` | Sort (case-insensitive) |
| `reverse` | Reverse order |
| `map: "prop"` | Extract property |
| `where: "prop", "val"` | Filter by property |
| `compact: "prop"` | Remove nil values |
| `uniq: "prop"` | Unique values |
| `concat: array` | Join arrays |
| `join: ", "` | Array to string |
| `push` / `pop` / `shift` / `unshift` | Array manipulation |

### Localization Filters
| Filter | Description |
|--------|-------------|
| `lc` | Translate key for page locale |
| `lce` | Translate by editor locale |
| `lcc: count` | Pluralized translation |

### Utility Filters
| Filter | Description |
|--------|-------------|
| `json` | Convert to JSON |
| `json_parse` | Parse JSON string to object |

---

## JavaScript Toolkits

### Custom Data Toolkit
```html
{% editorjsblock %}
  <script src='{{ site.static_asset_host }}/libs/edicy-tools/latest/edicy-tools.js'></script>
{% endeditorjsblock %}
```

```javascript
var pageData = new Edicy.CustomData({
  type: "page",    // "page", "article", or "site"
  id: {{ page.id }}
});

pageData.set("key", "value");
pageData.set({ key1: "val1", key2: "val2" });
pageData.get("key");
pageData.remove("key");

// Events
pageData.on('success', function(data, request) { /* request.type: "get"/"set"/"remove" */ });
```

Template access: `{{ page.data.key }}`

### Settings Editor
```javascript
var settingsEditor = new Edicy.SettingsEditor({
  menuItems: [
    { title: "Background color", type: "colorPicker", key: "bg_color" },
    { title: "Columns", type: "select", key: "columns", list: [
      { title: "One", value: 1 }, { title: "Two", value: 2 }
    ]},
    { title: "Font size", type: "range", key: "font_size", min: 12, max: 48, unit: "px" },
    { title: "Show title", type: "toggle", key: "show_title", states: { on: true, off: false } }
  ],
  values: { bg_color: "#fff", columns: 2, font_size: 16, show_title: true },
  preview: function(data) { /* live preview */ },
  commit: function(data) { /* save via CustomData */ }
});
```

**Option types:** `text`, `textarea`, `number`, `range`, `radio`, `select`, `checkbox`, `toggle`

### Image Drop Area
```javascript
var dropArea = new Edicy.ImgDropArea($('.drop-zone'), {
  positionable: false,
  target_width: 1280,
  change: function(data) {
    // data: { url, width, height, imageSizes, ... }
  }
});
```

### Search (VoogSearch)
```html
<link rel="stylesheet" href="{{ site.static_asset_host }}/libs/edicy-search/latest/edicy-search.css">
```
```javascript
var search = new VoogSearch(document.querySelector('.search-form'), {
  per_page: 10,
  lang: "{{ page.language_code }}",
  minQueryLength: 3
});
```

---

## Design Editor (`customstyle`)

Enables visual CSS customization for editors.

```liquid
{% customstyle %}
:root {
  /* VoogStyle
     "path": ["Colors"],
     "title": "Background",
     "editor": "colorPicker"
  */
  --bg-color: #ffffff;
}
body { background: var(--bg-color); }
{% endcustomstyle %}
```

### VoogStyle Comment Parameters
| Param | Required | Description |
|-------|----------|-------------|
| `path` | Yes | Array: position in editor tree |
| `title` | Yes | Parameter label |
| `editor` | Yes | `colorPicker`, `listPicker`, `rangePicker`, `toggleIcon` |
| `type` | No | `row` (default) or `button` |
| `featured` | No | Show when group collapsed |
| `boundVariables` | No | Array of synced CSS variables |

**rangePicker:** `min`, `max`, `unit`, `step`
**toggleIcon:** `icon` ("bold"/"italic"/"underline"/"uppercase"), `states` ({on, off})
**listPicker:** `list` (array of {title, value})

---

## Essential Layout Pattern

Every layout needs these tags:

```html
<html>
<head>
  {{ site.stats_header }}
  {% stylesheet_link "style.css" %}
  <title>{% title %}</title>
</head>
<body>
  {% content name="body" %}
  {% sitejs_include %}
  {{ site.analytics }}
</body>
</html>
```

## Common Patterns

### Navigation
```liquid
<nav>
  {% menulink site.root_item wrapper-tag="li" %}
  {% for item in site.visible_menuitems %}
    {% menulink item wrapper-tag="li" %}
    {% if item.selected_with_children? %}
      {% for child in item.visible_children %}
        {% menulink child wrapper-tag="li" %}
      {% endfor %}
    {% endif %}
  {% endfor %}
</nav>
```

### Language Switcher
```liquid
{% if editmode or site.has_many_languages? %}
  {% for lang in site.languages %}
    <a href="{{ lang.url }}"{% if lang.selected? %} class="active"{% endif %}>
      {{ lang.title }}
    </a>
  {% endfor %}
{% endif %}
```

### Blog Listing
```liquid
{% for article in blog.articles %}
  <article>
    <h2><a href="{{ article.url }}">{{ article.title }}</a></h2>
    <time>{{ article.created_at | format_date: "long" }}</time>
    {{ article.excerpt }}
  </article>
{% endfor %}
```

### Element Catalog
```liquid
{% for el in elements %}
  <div>
    {% editable el.title %}
    {% editable el.description %}
    {% editable el.photo target_width=600 %}
  </div>
{% endfor %}
{% addbutton element_type="Team Member" %}
```

### Dynamic Content Blocks
```liquid
{% assign count = page.data.content_blocks_count | default: 1 | to_num %}
{% for i in (1..count) %}
  {% assign name = "content-" | append: i %}
  {% content name=name %}
{% endfor %}
```
