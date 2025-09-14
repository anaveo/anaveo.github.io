---
layout: page
title: KITT
description: A (highly overengineered) line follower.
img: assets/img/projects/kitt/kitt.jpg
importance: 4
category: just for fun
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kitt/render.jpg" title="render" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The purpose of the project is to develop an autonomous-line following vehicle for robotics/transport purposes. Lines forming paths of various complexities should be tracked in a consistent, controlled manner. The device may be used as a general robotics platform onto which other technologies may be added or explored.  
This project was a joint effort with myself and [Andrew Prata](https://www.linkedin.com/in/andrew-p-jr).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kitt/sensors.jpg" title="sensors" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Kitt uses 5 IR sensors to detect the position of the line. It is driven using two geared DC motors, with a swiveling caster wheel in the front. The system is powered using 8 AA batteries.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kitt/drawing.jpg" title="drawing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kitt/sensor_layout.jpg" title="sensor_layout" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Initially, the vehicle was designed to travel with its drive motors in front, with 4 IR sensors in a T configuration (left). Three sensors were on the axis of the drive motors, and a fourth was placed in the front.

The purpose of the T shaped arrangement was to ensure that the center sensor is always on top of a line. As the three sensors are placed on the same axis as the drive motors, any turn (where both drive motors are rotating with same speed but opposing directions) would have the side sensors rotating about the center sensor. This was designed to ensure quick response in the event of a deviation. During testing, this system did not meet expectations.  

The inefficiencies of the initial array led to the creation of the final sensor layout (right). This array consists of 5 IR sensors, linearly spaced by 19 millimeters. With this layout, the vehicle travels with its drive motors on the rear. This layout allows a wide band of sensory input. As the sensors are placed in the front of the chassis, the vehicle can course-correct in advance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kitt/cad.jpg" title="cad" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    CAD Model. Designed in Autodesk Fusion 360
</div>
<div class="row">
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kitt/chassis_side.jpg" title="chassis_side" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kitt/chassis_top.jpg" title="chassis_top" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Chassis construction (made using laser-cut MDF)
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kitt/andrew_wiring.jpg" title="andrew_wiring" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Electronics wiring (CAD & wiring by Andrew Prata)
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kitt/debugging.jpg" title="debugging" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Software testing and debugging
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kitt/kitt.jpg" title="kitt" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Completed prototype
</div>