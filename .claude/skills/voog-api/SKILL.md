---
name: voog-api
description: Interact with the Voog CMS API for the adl.cs.ut.ee site. Fetch pages, articles, elements, people, assets, and other content. Supports CRUD operations, filtering, sorting, and pagination.
argument-hint: "<action> [resource] [options] — e.g. 'list articles', 'get page by path /blog', 'search elements tagged robotics'"
allowed-tools:
  - WebFetch
  - Bash
  - Read
  - Write
  - Edit
  - Grep
  - Glob
---

# Voog CMS API Skill

You are interacting with the Voog CMS API for the site **adl.cs.ut.ee**.

## Request: $ARGUMENTS

## Base Configuration

- **Base URL**: `https://adl.cs.ut.ee/admin/api/`
- **Authentication**: Via `X-API-TOKEN` header or `?api_token=TOKEN` query parameter
- **Content-Type**: `application/json` for request bodies
- **Response format**: JSON

**Important**: Some endpoints allow anonymous (unauthenticated) access for read operations: articles, elements, contents, search, and tags. For all write operations and other endpoints, an API token is required.

When no API token is available, use anonymous-accessible endpoints. If a token is needed, ask the user for it.

## Pagination

All list endpoints support pagination:
- `per_page` — Number of results per page (default: 50, max: 250)
- `page` — Page number (default: 1)

Response headers include: `X-Total-Count` (total items), `X-Total-Pages`, `X-Current-Page`, `X-Per-Page`.

To fetch all items, loop through pages until `page > X-Total-Pages`.

## Filtering

Filter syntax: `q.object.attribute.$comparator=value`

### Comparators
| Comparator | Meaning |
|---|---|
| `$eq` | Equals |
| `$not_eq` | Not equals |
| `$gt` | Greater than |
| `$gte` | Greater than or equal |
| `$lt` | Less than |
| `$lte` | Less than or equal |
| `$cont` | Contains (substring) |
| `$not_cont` | Does not contain |
| `$starts` | Starts with |
| `$not_starts` | Does not start with |
| `$ends` | Ends with |
| `$not_ends` | Does not end with |
| `$in` | In list (comma-separated) |
| `$not_in` | Not in list |
| `$present` | Is not null/empty (`true`/`false`) |
| `$blank` | Is null/empty (`true`/`false`) |

Example: `q.article.title.$cont=rally` — find articles with "rally" in the title.

## Sorting

Sort syntax: `s=object.attribute.$asc` or `s=object.attribute.$desc`

Example: `s=article.created_at.$desc` — sort articles by creation date, newest first.

## API Endpoints

### Pages
```
GET    /admin/api/pages                    # List pages
GET    /admin/api/pages/:id                # Get page
POST   /admin/api/pages                    # Create page
PUT    /admin/api/pages/:id                # Update page
PATCH  /admin/api/pages/:id                # Patch page (partial update)
DELETE /admin/api/pages/:id                # Delete page
```
Filter fields: `page.content_type`, `page.language_code`, `page.path`, `page.title`, `page.hidden`, `page.publishing`, `page.parent_id`

Content types: `1` (regular), `2` (blog), `3` (element list), `4` (redirect)

### Articles (anonymous read access)
```
GET    /admin/api/articles                 # List articles
GET    /admin/api/articles/:id             # Get article
POST   /admin/api/pages/:page_id/articles  # Create article under blog page
PUT    /admin/api/articles/:id             # Update article
PATCH  /admin/api/articles/:id             # Patch article
DELETE /admin/api/articles/:id             # Delete article
```
Filter fields: `article.page_id`, `article.title`, `article.published`, `article.language_code`, `article.created_at`, `article.updated_at`

Query params: `tag` (filter by tag name), `include_details=true` (include body/summary)

### Elements (anonymous read access)
```
GET    /admin/api/elements                 # List elements
GET    /admin/api/elements/:id             # Get element
POST   /admin/api/elements                 # Create element
PUT    /admin/api/elements/:id             # Update element
DELETE /admin/api/elements/:id             # Delete element
```
Filter fields: `element.element_definition_id`, `element.page_id`, `element.title`, `element.values.*`

### Element Definitions
```
GET    /admin/api/element_definitions      # List element definitions
GET    /admin/api/element_definitions/:id  # Get element definition
```

### People
```
GET    /admin/api/people                   # List people
GET    /admin/api/people/:id               # Get person
POST   /admin/api/people                   # Create person
PUT    /admin/api/people/:id               # Update person
DELETE /admin/api/people/:id               # Delete person
```

### Site
```
GET    /admin/api/site                     # Get site info
PUT    /admin/api/site                     # Update site
PATCH  /admin/api/site                     # Patch site
```

### Nodes (site tree structure)
```
GET    /admin/api/nodes                    # List nodes
GET    /admin/api/nodes/:id                # Get node
PUT    /admin/api/nodes/:id                # Update node
PUT    /admin/api/nodes/:id/move           # Move node (position: before/after/child)
PUT    /admin/api/nodes/:id/relocate       # Relocate node to new parent
```

### Contents (nested under parent)
```
GET    /admin/api/{parent_type}/{id}/contents       # List contents
GET    /admin/api/{parent_type}/{id}/contents/:id   # Get content
POST   /admin/api/{parent_type}/{id}/contents       # Create content
PUT    /admin/api/{parent_type}/{id}/contents/:id   # Update content
DELETE /admin/api/{parent_type}/{id}/contents/:id   # Delete content
```
Parent types: `pages`, `articles`, `elements`

### Media Sets
```
GET    /admin/api/media_sets               # List media sets (folders)
GET    /admin/api/media_sets/:id           # Get media set
POST   /admin/api/media_sets               # Create media set
PUT    /admin/api/media_sets/:id           # Update media set
DELETE /admin/api/media_sets/:id           # Delete media set
```

### Assets (3-step upload)
```
GET    /admin/api/assets                   # List assets
GET    /admin/api/assets/:id               # Get asset
POST   /admin/api/assets                   # Step 1: Create asset record (returns upload URL)
                                           # Step 2: Upload file to returned S3 URL
PUT    /admin/api/assets/:id/confirm       # Step 3: Confirm upload
DELETE /admin/api/assets/:id               # Delete asset
```

### Languages
```
GET    /admin/api/languages                # List languages
GET    /admin/api/languages/:id            # Get language
POST   /admin/api/languages                # Create language
PUT    /admin/api/languages/:id            # Update language
DELETE /admin/api/languages/:id            # Delete language
```

### Tags (anonymous read access)
```
GET    /admin/api/tags                     # List tags
GET    /admin/api/tags/:id                 # Get tag
```

### Layouts
```
GET    /admin/api/layouts                  # List layouts
GET    /admin/api/layouts/:id              # Get layout
POST   /admin/api/layouts                  # Create layout
PUT    /admin/api/layouts/:id              # Update layout
DELETE /admin/api/layouts/:id              # Delete layout
```

### Search (anonymous access)
```
GET    /admin/api/search?q=query           # Search site content
```

### Texts
```
GET    /admin/api/texts                    # List text keys
GET    /admin/api/texts/:key               # Get text by key
PUT    /admin/api/texts/:key               # Update text
```

## Common Usage Patterns

### Fetch all blog articles
```
GET /admin/api/articles?per_page=250&s=article.created_at.$desc
```

### Fetch a specific page by path
```
GET /admin/api/pages?q.page.path.$eq=blog
```

### Fetch elements of a specific type
```
GET /admin/api/elements?q.element.element_definition_id.$eq=123&per_page=250
```

### Fetch article with full body content
```
GET /admin/api/articles/:id?include_details=true
```

### Fetch all team members (if stored as elements)
```
# First find the element definition for team members
GET /admin/api/element_definitions
# Then fetch elements of that type
GET /admin/api/elements?q.element.element_definition_id.$eq=TEAM_DEF_ID&per_page=250
```

## Implementation Notes

- Use `WebFetch` for API calls. For anonymous endpoints, no auth header is needed.
- For authenticated requests, include the token: `headers: {"X-API-TOKEN": "your-token"}`
- Always handle pagination — check `X-Total-Pages` header and loop if needed.
- Article bodies may contain HTML — parse carefully when converting to Markdown.
- The site at adl.cs.ut.ee uses Voog CMS; the Jekyll repo mirrors this content as static files.
