---
layout: page
title: projects
permalink: /projects/
description: Selected research and technical work.
nav: true
nav_order: 3
display_categories: [research, systems-embedded]
category_labels:
  systems-embedded: systems & embedded
horizontal: true
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.data.ongoing_research != blank %}
  <section class="ongoing-research" aria-labelledby="ongoing-research-title">
    <h2 class="category" id="ongoing-research-title">ongoing research</h2>
    <div class="ongoing-research-grid">
      {% for project in site.data.ongoing_research %}
        {% include ongoing_research_card.liquid project=project %}
      {% endfor %}
    </div>
  </section>
{% endif %}
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ page.category_labels[category] | default: category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

<section class="earlier-technical-projects" markdown="1">

## Earlier technical projects

A few earlier coursework projects that helped me build breadth across web applications, databases, and graphics.

- **[Mewply](https://github.com/kitkiti/Music-Streaming-App)**<br>
  MERN music-streaming platform with separate user, administration, and backend applications, REST APIs, authentication, playlist/audio workflows, and Cloudinary media storage.
- **[HambaMart](https://github.com/kitkiti/HambaMart)**<br>
  Django-based livestock marketplace built around relational schema design, role-based workflows, listings, transactions, inventory, and filtered search.
- **[Sky Ball Game](https://github.com/kitkiti/Sky-Ball-Game)**<br>
  3D OpenGL arcade game with lane-based movement, jumping and sliding, procedural road segments, obstacles, collectibles, collision handling, camera control, and persistent scoring.

</section>
