---
layout: project
title: Cosmopilot
tagline: Extraterrestrial navigation using satellite topographical data
img: assets/img/projects/cosmopilot/thumbnail.jpg
banner: assets/img/projects/cosmopilot/banner.jpg
date: 2022-10-01
importance: 2
category: just for fun
visible: true

links:
  - label: Demo
    url: https://www.youtube.com/watch?v=wlNoBsW1HoA
  - label: DevPost
    url: https://devpost.com/software/cosmopilot-an-extraterrestial-navigator
  - label: GitHub
    url: https://github.com/anaveo/cosmopilot

sections:
  - title: Overview
    text: |
      Cosmopilot is a navigation app that uses satellite topographical data to create safe and efficient paths for surface vehicles on other planets. It's essentially Google Maps, but for Mars!

      The inspiration for this project is the rapid increase in spacecraft launches and interplanetary plans. The app is for the "everyday spacefarer" who wants to travel on undeveloped planets.

      This project was a joint effort with myself and [Andrew Prata](https://www.linkedin.com/in/andrew-p-jr).

      The app is constructed using Google's Flutter platform, which makes it compatible with Android and iOS devices. The pathfinding is done by a modified implementation of Dijkstra's algorithm.

      This project was an entry into the HackRPI 2022 hackathon. While it may not have a practical purpose for the everyday user, it was a fun weekend programming exercise.
    image: assets/img/projects/cosmopilot/app_mockup.png
    image_caption: Path planning on a Mars topographical map
      

  - title: Data Collection
    text: |
      We used topographical maps of Mars from NASA orbiters to determine the terrain data. The images were then fed into a simple Python script which converted the color-bitmaps into a 2D occupancy matrix. These matrices are then used by the path planner algorithm.
    gallery:
      - src: assets/img/projects/cosmopilot/mars_1.jpg
        caption: "NASA/JPL/University of Arizona | MRO/HiRISE"
      - src: assets/img/projects/cosmopilot/mars_2.jpg
        caption: "NASA/JPL/University of Arizona | MRO/HiRISE"
---
