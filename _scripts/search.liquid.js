---
permalink: /assets/js/search-data.js
---
const ninja = document.querySelector('ninja-keys');

/* Search only publication project pages and projects visible on the projects page. */
{%- assign projects_page = site.pages | where: 'permalink', '/projects/' | first -%}
{%- assign search_projects = site.projects | sort: 'importance' -%}
ninja.data = [
  {%- for item in search_projects -%}
    {%- if item.search == false -%}{%- continue -%}{%- endif -%}
    {%- if item.category == 'publication' -%}
      {%- assign search_section = 'Publications' -%}
    {%- else -%}
      {%- if site.enable_project_categories and projects_page.display_categories -%}
        {%- unless projects_page.display_categories contains item.category -%}
          {%- continue -%}
        {%- endunless -%}
      {%- endif -%}
      {%- assign search_section = 'Projects' -%}
    {%- endif -%}
    {%- assign search_title = item.title | strip_html | strip_newlines | strip -%}
    {%- assign search_description = item.description | strip_html | strip_newlines | strip -%}
    {%- assign search_url = item.redirect | default: item.url -%}
    {%- unless search_url contains '://' -%}
      {%- assign search_url = search_url | relative_url -%}
    {%- endunless -%}
    {
      id: {{ item.url | prepend: 'project-' | jsonify }},
      title: {{ search_title | jsonify }},
      description: {{ search_description | jsonify }},
      section: {{ search_section | jsonify }},
      searchPriority: {% if search_section == 'Publications' %}1{% else %}0{% endif %},
      handler: () => {
        window.location.href = {{ search_url | jsonify }};
      },
    },
  {%- endfor -%}
].sort((a, b) => b.searchPriority - a.searchPriority);
