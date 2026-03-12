---
layout: project
title: LAZR
tagline: A gesture-based universal TV remote
img: assets/img/projects/lazr/lazr.jpg
banner: assets/img/projects/lazr/banner.jpg
date: 2019-01-28
importance: 4
category: just for fun
visible: true

links:
  - label: Instructables
    url: https://www.instructables.com/Gesture-Controlled-Universal-Remote-With-Node-MCU/
  - label: GitHub
    url: https://github.com/anaveo/LAZR-Dev

sections:
  - title: Overview
    text: |
      Similar to Gestr, my hand gesture translating glove project, LAZR is a remote which uses hand gestures to control functions of a TV. I undertook this project to understand IR signals and learn Autodesk Eagle, a PCB design software.

      LAZR uses a ESP8266 microcontroller connected to 5 flex sensors for gesture recognition. A 4051 analog multiplexer was used to measure the sensors simultaneously. On top of WiFi functions, the board contains an IR transceiver to program the remote and send signals.
    image: assets/img/projects/lazr/thumbs_up.jpg
    image_caption: Thumbs up!

  - title: PCB Design
    full_image: assets/img/projects/lazr/schematic.jpg
    image_caption: Device schematic

  - title: Build
    gallery:
      - src: assets/img/projects/lazr/layout.jpg
        caption: PCB layout
      - src: assets/img/projects/lazr/bare_pcb.jpg
        caption: Bare PCB
      - src: assets/img/projects/lazr/assembled_pcb.jpg
        caption: Assembled PCB
---
