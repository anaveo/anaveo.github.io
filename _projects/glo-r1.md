---
layout: project
title: Glo Rev 1
tagline: A hackable, Arduino-Based RGB LED Strip Controller
description: >
  A quad-channel addressable LED driver built around the ATmega328p. Designed,
  manufactured, and shipped through a successful Kickstarter campaign that reached
  over 300% of its funding goal.
img: assets/img/projects/glo_r1/top.jpg
banner: assets/img/projects/glo_r1/banner.jpg
date: 2020-01-01
importance: 2
category: just for fun
visible: true

links:
  - label: Kickstarter
    url: https://www.kickstarter.com/projects/omnitech/glo-a-hackable-arduino-based-rgb-led-strip-controller?ref=user_menu
    color: "#05CE78"
  - label: Instructables
    url: https://www.instructables.com/Glo-a-Hackable-Arduino-Based-RGB-StripNeopixel-Con/
    color: "#edae00"
  - label: GitHub
    url: https://github.com/anaveo/Glo1-Kick
    color: "#6900cc"

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
      Glo is my first hardware product released to market, an addressable LED driver board with external IO and programmable functions.
      Built around the ATmega328p with the Arduino bootloader, it serves as a compact Arduino substitute purpose-built for LED applications.
      Screw terminal connectors and four independent ARGB channels make it ideal for rugged lighting installations.
    image: assets/img/projects/glo_r1/glo_arduino.jpg
    image_caption: Glo Rev 1 next to an Arduino Uno

  - title: System Design
    text: |
      Glo exposes two separate USB ports, one for power, one for programming, so the board can be flashed
      while LEDs are actively running. Two programmable pushbuttons and a hall effect sensor provide built-in
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
