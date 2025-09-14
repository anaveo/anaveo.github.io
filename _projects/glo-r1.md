---
layout: page
title: Glo Rev 1
description: A quad-channel adressable RGB LED controller.
img: assets/img/projects/glo_r1/top.jpg
importance: 2
category: just for fun
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/glo_r1/top.jpg" title="top" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Glo is my first project which was released to the market. It is an addressable LED driver board with external IO and programmable functions. This project was launched on [Kickstarter](https://www.kickstarter.com/projects/omnitech/glo-a-hackable-arduino-based-rgb-led-strip-controller?ref=user_menu) and received over 300% funding. Over 100 units were shipped to 65 backers.

#### Additional Resources:
[Glo Rev 1 Kickstarter Page](https://www.kickstarter.com/projects/omnitech/glo-a-hackable-arduino-based-rgb-led-strip-controller?ref=user_menu)  
[Glo Rev 1 Instructable](https://www.instructables.com/Glo-a-Hackable-Arduino-Based-RGB-StripNeopixel-Con/)  
[Glo Rev 1 Github Repo](https://github.com/anaveo/Glo1-Kick)  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/glo_r1/glo_arduino.jpg" title="glo_arduino" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Glo uses an Atmega328p processor and uses the Arduino bootloader. This makes it an effective Arduino substitute for LED-related projects. Its screw terminal connectors and 4 LED channels make it a robust solution for both prototypes and permanent applications.  

### System Design  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/glo_r1/labeled_diagram.jpg" title="labeled_diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Glo has two separate USB ports, allowing the board to be programmed while power is applied to its LEDs. The device also features two programmable pushbuttons and a hall effect sensor. Glo's various IO can be used to interface several sensors, displays and communication modules.

### Product Development  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/glo_r1/processor_schematic.jpg" title="processor_schematic" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Glo's processor schematic (designed using Altium Designer)
<div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/glo_r1/layout.jpg" title="layout" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Glo PCB layout
</div>
<div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/glo_r1/assembled_pcbs.jpg" title="assembled_pcbs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Assembled PCBs awaiting shipping
</div>
<div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/glo_r1/rainbow.jpg" title="rainbow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Glo running rainbow program outdoors
</div>