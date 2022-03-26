# Autonomous Driving Lab homepage

This repository hosts the [Autonomous Driving Lab homepage](https://adl.cs.ut.ee/). The homepage is implemented using [Jekyll](https://jekyllrb.com/), which generates static web site based on HTML templates and Markdown content files. It is hosted by [GitHub Pages](https://pages.github.com/), which means that every time you commit something to the repository, the homepage is automatically updated. To get permission to edit the content send your GitHub account name to adl@ut.ee.

Few links to get started with Jekyll:
* [Step by Step Tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/) gives concise overview of the Jekyll basics. Recommended read.
* [Liquid template language](https://shopify.github.io/liquid/) is used in Jekyll HTML template files.
* [kramdown flavor](https://kramdown.gettalong.org/quickref.html) of Markdown is used for some of the content.

Quickstart regarding the content:
* To change menus edit [\_data/navigation.yml](_data/navigation.yml).
* To change the list of news articles and videos edit [\_data/media.yml](_data/media.yml).
* To change the team members edit [\_data/team.yml](_data/team.yml).
* To add new research papers edit [\_data/research-papers.yml](_data/research-papers.yml).
* To change the list of courses edit [\_data/courses.yml](_data/courses.yml).
* To add new thesis topics edit [\_data/thesis-topics.yml](_data/thesis-topics.yml).
* To add new defended theses edit [\_data/defended-theses.yml](_data/defended-theses.yml).
* To change the research area descriptions edit one of the Markdown files in [\_research-areas](_research-areas).
* To add new project add new Markdown file to [\_projects](_projects).

More information about those files below.

## Navigation

Navigation refers to the menus and site map in the page footer. It is implemented as [data file](https://jekyllrb.com/docs/step-by-step/06-data-files/) [\_data/navigation.yml](_data/navigation.yml). The menu items can have following attributes:
* `page` - title of the menu item.
* `url` - (relative) address of the page.
* `prefix` - menu item is active if the URL contains this string. Used only for the main menu.

## Media

Media includes links to articles and videos and is used to generate the [Media page](https://adl.cs.ut.ee/discover/media). It is implemented as [data file](https://jekyllrb.com/docs/step-by-step/06-data-files/) [\_data/media.yml](_data/media.yml). This file contains the list of links, each of the links can have following attributes:
* `type` - either `video` or `article`. Three latest videos are shown at the beginning of the page.
* `url` - link to the article or video.
* `image` - image to use with the link. Currently used only with videos. Hint: you can use Youtube thumbnail link here, see [this](https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api).
* `language` - either `ee` or `en`. Articles can be filtered by this on the web page.
* `date` - when the article was published. Articles are shown in descending order. Date must use format YYYY-MM-DD.
* `title` - title of the link.

## Team

Team includes the team members used to generate the [Meet our team page](https://adl.cs.ut.ee/discover/team). It is implemented as [data file](https://jekyllrb.com/docs/step-by-step/06-data-files/) [\_data/team.yml](_data/team.yml). This file contains the list of people, each can have following attributes:
* `name` - name of the person.
* `position` - position of the person.
* `group` - either `lead`, `team lead`, `engineer` or `student`.
* `email` - e-mail of the person.
* `image` - photo of the person. The photos should be put to [images/team](images/team)

## Research papers

Research papers are shown under the [Publications](https://adl.cs.ut.ee/research/publications) and also filtered list is shown under each [Research area](https://adl.cs.ut.ee/research/research-areas). It is implemented as [data file](https://jekyllrb.com/docs/step-by-step/06-data-files/) [\_data/research-papers.yml](_data/research-papers.yml). This file contains the list of papers, each can have following attributes:
* `title` - title of the paper.
* `conference` - short name of the conference, journal or other publication venue.
* `research_area` - title of research area, e.g. `Behavior prediction`, `Motion planning`, `Learned driving`, `Human-vehicle interaction`, `Security`, etc. Used for filtering the papers under each research area. NB! Pay attention to casing and spaces!
* `authors` - list of authors. Format is comma separated full names.
* `year` - publication year.
* `link` - link to the paper.
* `website` - optional link to the website.
* `github` - optional link to the GitHub page.
* `file` - optional link to supplementary files.
* `video` - optional link to video.

## Courses

List of courses shown under the [Courses page](https://adl.cs.ut.ee/teaching/courses). It is implemented as [data file](https://jekyllrb.com/docs/step-by-step/06-data-files/) [\_data/courses.yml](_data/courses.yml). This file contains the list of courses, each can have following attributes:
* `type` - one of `Introductory course`, `Related subtasks` or `Related fields`. Used for grouping the courses.
* `title` - title of the course.
* `code` - SIS code of the course.
* `spicyness` - number of cars displayed next to the course, can be 1-3.
* `ects` - number of credits.
* `lecturer` - name of the lecturer.
* `link` - link to the Study Information System.
* `description` - short description of the course and its relationship to ADL.

## Thesis topics
List of thesis topics is shown on the [Thesis topics page](https://adl.cs.ut.ee/teaching/thesis-topics). It is implemented as [data file](https://jekyllrb.com/docs/step-by-step/06-data-files/) [\_data/thesis-topics.yml](_data/thesis-topics.yml). This file contains the list of topics, each can have following attributes:
* `title` - title of the thesis topic.
* `description` - short descriptions of the thesis topic.
* `type` - name of the research area, e.g. `Behavior prediction`, `High-definition maps`, `Localization`, etc.
* `availability` - thesis topic availability:
  * `BSc` - available to bachelor students, `yes` or `no`
  * `MSc` - available to master students, `yes` or `no`
  * `PhD` - available to PhD students, `yes` or `no`
* `leads` - supervisors of the thesis, can be multiple:
  * `name` - name of the supervisor.
  * `email` - e-mail of the supervisor.
* `file` - optional link to more elaborate description, e.g. from [ATI thesis offers site](https://comserv.cs.ut.ee/ati_thesis_offers/).

## Defended theses
List of defended theses shown on the [Defended theses page](https://adl.cs.ut.ee/teaching/defended-theses). It is implemented as [data file](https://jekyllrb.com/docs/step-by-step/06-data-files/) [\_data/defended-theses.yml](_data/defended-theses.yml). This file contains the list of theses, each can have following attributes:
* `title` - title of the thesis.
* `supervisor` - supervisor or supervisors of the thesis, comma separated list of full names.
* `research_area` - name of the research area, e.g. `Autonomy software`, `High-definition maps`, `Learned driving`, `Perception uncertainty`, `Human-vehicle interaction`, etc. Used to filter the theses on research area page. NB! Pay attention to casing and spaces!
* `author` - name of the author.
* `field` - one of `BSc`, `MSc` or `PhD`.
* `year` - when the thesis was defended.
* `link` - link to the thesis text, e.g. from [ATI thesis site](https://comserv.cs.ut.ee/ati_thesis/).

## Research areas
[Research areas](https://adl.cs.ut.ee/research/research-areas) are implemented as [collection](https://jekyllrb.com/docs/step-by-step/09-collections/) in [\_research-areas](_research-areas) directory. The content is in [Markdown](https://kramdown.gettalong.org/quickref.html) files, but within Markdown file [HTML can also be used](https://stackoverflow.com/questions/28030858/jekyll-include-html-partial-inside-markdown-file). Each of the files includes [front matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/) with following attributes:
* `layout` - must be `research-area`.
* `title` - title of the page.
* `icon` - pictogram of the research area used on the [Research areas page](https://adl.cs.ut.ee/research/research-areas).
* `research_lead` - name of the research lead.
* `lead_image` - photo of the research lead.
* `lead_description` - position of the research lead.
* `lead_email` - e-mail of the research lead.
* `webURL` - optional link for the group or research lead homepage.
* `twitter` - optional link for the group or research lead Twitter page.
* `facebook` - optional link for the group or research lead Facebook page.
* `instagram` - optional link for the group or research lead Instagram page.

## Projects
[Projects](https://adl.cs.ut.ee/research/projects)  are implemented as [collection](https://jekyllrb.com/docs/step-by-step/09-collections/) in [\_projects](_projects) directory. The content is in [Markdown](https://kramdown.gettalong.org/quickref.html) files, but within Markdown file [HTML can also be used](https://stackoverflow.com/questions/28030858/jekyll-include-html-partial-inside-markdown-file). Each of the files includes [front matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/) with following attributes:
* `layout` - must be `project`.
* `title` - title of the page.
* `category` - not used.
* `webURL` - optional link to the project web page.
* `twitter` - optional link to the project Twitter page.
* `facebook` - optional link to the project Facebook page.
* `instagram` - optional link to the project Instagram page.
