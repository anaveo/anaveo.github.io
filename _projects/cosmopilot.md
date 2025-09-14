---
layout: page
title: Cosmopilot
description: An extraterrestrial navigation app that uses satellite topographical data to generate safe paths.
img: assets/img/projects/cosmopilot/cosmopilot.jpg
# banner: assets/img/projects/cosmopilot/cosmopilot_banner.jpg
# banner_title: ""
# banner_description: ""
# overlay: false
importance: 2
category: just for fun
---


<div class="row align-items-center">
  <!-- Left column: Text -->
    <div class="col-md-7 mt-3 mt-md-0">
    <p>
        Cosmopilot is a navigation app that uses satellite topographical data to create safe and efficient paths for surface vehicles on other planets. It's essentially Google Maps, but for Mars!
    </p>
    <p>
        The inspiration for this project is the rapid increase in spacecraft launches and interplanetary plans. The app is for the "everyday spacefarer" who wants to travel on undeveloped planets.
    </p>
    <p>
        This project was a joint effort with myself and 
        <a href="https://www.linkedin.com/in/andrew-p-jr" target="_blank">Andrew Prata</a>.
    </p>
    <p>
        <a href="https://www.youtube.com/watch?v=wlNoBsW1HoA" target="_blank">Cosmopilot Demo</a><br>
        <a href="https://devpost.com/software/cosmopilot-an-extraterrestial-navigator" target="_blank">Cosmopilot DevPost</a><br>
        <a href="https://github.com/anaveo/cosmopilot" target="_blank">Cosmopilot GitHub Repo</a>
    </p>
    </div>


  <!-- Right column: Portrait Image -->
  <div class="col-md-5 mt-3 mt-md-0 text-center">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/projects/cosmopilot/app_mockup.png"  
      title="app_mockup" 
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

### System Design  

The app is constructed using Google's Flutter platform, which makes it compatible with Android and iOS devices. The pathfinding is done by a modified implementation of Dijkstra's algorithm.  

This project was an entry into the HackRPI 2022 hackathon. While it may not have a practical purpose for the everyday user, it was a fun weekend programming exercise.

### Data Collection  

We used topographical maps of Mars from NASA orbiters to determine the terrain data. The images were then fed into a simply Python script which converted the color-bitmaps into a 2D occupancy matrix. These matrices are then used by the path planner algorithm.  

<div class="row">
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/cosmopilot/mars_1.jpg" title="mars_1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/cosmopilot/mars_2.jpg" title="mars_2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Image Credits: [University of Arizona Lunar and Planetary Laboratory](https://www.uahirise.org/dtm/)
</div>

