---
layout: page
title: "About Atlanta NWSL VIPs"
permalink: "/about/"
timezone: America/New_York
Last_Updated: 2025-11-30
---

**Atlanta NWSL VIPs** is independently operated by an analyst, archivist, and long-time supporter of soccer.  It was created during the early months of COVID - a time when everyone was stuck at home looking for something productive to focus on. What started as a simple project to organize match stats quickly turned into a long-term effort to document Atlanta in a clear, accurate, and meaningful way.



Today, **Atlanta NWSL VIPs** brings together analysis, research, historical archiving, and original writing to give supporters a reliable place to learn more about the club.

## What This Site is About ##

This site brings together multiple ongoing projects, including:
* Match Analysis and Reporting
* Tracking current and former players
* Detailed match reports for Atlanta and related competitions
* Player-specific breakdowns, including xG, duels, key actions, and other advanced metrics
* In-game commentary
* Post-match Articles built from a balanced perspective

**Atlanta NWSL VIPs** aims to create a dependable, fact-based resource for Atlanta supporters - something that documents the club’s past and present without noise, speculation, or shortcuts.

### Match Reports and Analysis ###
You’ll find data-driven match breakdowns, player highlights, trends, and performance insights - all created from custom tools and scripts developed specifically for this project.

### Historical Projects ###
A major part of **Atlanta NWSL VIPs** is preserving the full history of the club:

* A long-term project to rebuild and verify Atlanta's complete match history
* Manager timelines, performance charts, and competition-specific records
* Archiving of rosters, staff, player bios, and statistical profiles

### How the Site Works ###
Much of the site is powered by custom-built tools designed specifically for this project.  These handle tasks such as:
* Collecting and validating match data  
* Organizing images and media  
* Maintaining a structured archive of club history

It’s an ongoing process, and the goal is to eventually have a complete historical reference available for supporters.
This infrastructure allows the project to stay consistent, and sustainable, while remaining fully independent.

### Articles and Features ###

Beyond stats and reports, **Atlanta NWSL VIPs** publishes produces long-form articles about:
* Key moments in club history
* Player stories
* Tactical and roster-building trends
* Broader Atlanta soccer culture, including the return of professional women’s soccer to the city

### The Goal ###

Atlanta has quickly built one of the strongest soccer identities in the United States.
The goal of **Atlanta NWSL VIPs** is to preserve that story — and provide resources that help supporters understand the full picture, not just match by match but across seasons and years.

### Thank You ###

If you’ve taken the time to visit the site, read an article, follow on social media, or share any of the work - thank you.
This project has grown far beyond its original scope, and it’s only possible because people care enough to follow along.

Your support makes it worth continuing to build, expand, and improve.

{% assign aff_list = site.data.affiliations | default: empty %}
{% if aff_list and aff_list.size > 0 %}

### Related Projects & Affiliations

<div class="affiliation-block">
  {% for aff in aff_list %}

    <div class="affiliation-item">
    <div class="affiliation-logo-frame">
        <a href="{{ aff.url }}" target="_blank" class="affiliation-logo-link">
        <img src="{{ site.baseurl }}/{{ aff.logo }}"
            alt="{{ aff.name }} logo"
            class="affiliation-logo">
        </a>
    </div>

    <p class="affiliation-text">
        {% if aff.url %}
          <strong><a href="{{ aff.url }}" target="_blank">{{ aff.name }}</a></strong>
        {% else %}
          <strong>{{ aff.name }}</strong>
        {% endif %}

        {% if aff.role %}
          <span class="affiliation-role"> - {{ aff.role }}</span>
        {% endif %}

        {% if aff.description %}
          <br>{{ aff.description }}
        {% endif %}
    </p>
    </div>


  {% endfor %}
</div>

{% endif %}
