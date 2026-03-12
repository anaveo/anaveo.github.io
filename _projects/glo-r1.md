---
layout: project
title: Glo Rev 1
tagline: A hackable, Arduino-Based RGB LED Strip Controller
description: >
img: assets/img/projects/glo_r1/top.jpg
banner: assets/img/projects/glo_r1/banner.jpg
date: 2020-07-4
importance: 2
category: just for fun
visible: true

links:
  - label: Kickstarter
    url: https://www.kickstarter.com/projects/omnitech/glo-a-hackable-arduino-based-rgb-led-strip-controller?ref=user_menu
  - label: Instructables
    url: https://www.instructables.com/Glo-a-Hackable-Arduino-Based-RGB-StripNeopixel-Con/
  - label: GitHub
    url: https://github.com/anaveo/Glo1-Kick

highlights:
  - label: Funded
    value: "374%"
  - label: Units Shipped
    value: "100+"
  - label: Backers
    value: "65"

sections:
  - title: Overview
    text: |
      Glo started out as a weekend project during the pandemic to make a simple ARGB LED driver. It was launched as a Kickstarter campaign in 2020 and gained traction despite having no marketing, shipping over 100 units to 65 backers.

      Built around the ATmega328p with the Arduino bootloader, it serves as a compact Arduino substitute purpose-built for LED applications.
      Screw terminal connectors and four independent ARGB channels make it ideal for rugged lighting installations.
    image: assets/img/projects/glo_r1/glo_arduino.jpg
    image_caption: Glo Rev 1 next to Arduino UNO

  - title: System Design
    text: |
      Glo can simulataneously drive four 5V ARGB LED strips. It can be powered from either a screw terminal or via USB. A secondary programming USB is present for flashing the board while LEDs are actively running.

      Two programmable pushbuttons and a hall effect sensor provide built-in
      user inputs, and a full GPIO header makes it easy to attach sensors, displays, and communication modules.
    full_image: assets/img/projects/glo_r1/labeled_diagram.jpg
    image_caption: Pinout and feature diagram

  - title: Product Development
    text: 
    gallery:
      - src: assets/img/projects/glo_r1/processor_schematic.jpg
        caption: Processor schematic — Altium Designer
      - src: assets/img/projects/glo_r1/layout.jpg
        caption: PCB layout
      - src: assets/img/projects/glo_r1/assembled_pcbs.jpg
        caption: Assembled PCBs ready for shipping
      - src: assets/img/projects/glo_r1/rainbow.jpg
        caption: Running a rainbow animation outdoors
---
