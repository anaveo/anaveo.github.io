---
layout: page
title: D-O Droid
description: A companion bot inspired by the popular Star Wars droid.
img: assets/img/projects/do_droid/do_droid.jpg
importance: 4
category: just for fun
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/do_droid/do_droid.jpg" title="do_droid" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I created D-O as a way to further explore the electronics, CAD and robotics fields.  

D-O is modeled after the popular droid from Star Wars, and is intended to be an autonomous "companion bot". Nearly all of its parts were modeled on Fusion 360 and 3D printed. To teach myself embedded hardware and systems design, I chose to design all the electronics on the device instead of buying premade modules.


#### Drive System
D-O currently uses two brushed gearmotors on each wheel to move (new revision is planned to include brushless motors) Each motor is fitted with an encoder for precise position feedback.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/do_droid/drive_system.jpg" title="drive_system" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Head Movement
The "head" of the bot is connected on the same axis as the wheels, and has two types of movements. One movement is shifting the entire assembly about the wheel axis, similar to a human bending back and forward using their waist. The other movement is pitching te head up and down, similar to a human bending their neck. To enable these movements, I employed a "dual axle" design where one axle is nested within the other. Both can move independent of each other, allowing for smooth head movement.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/do_droid/dual_axis.jpg" title="dual_axis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Electronics
D-O is driven by Delta, a custom PCB which contains motor controllers, a microprocessor, and peripheral interfaces.  
To handle computationally intensive tasks such as computer vision, a Raspberry Pi 4 is connected to the system.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/do_droid/electronics.jpg" title="electronics" class="img-fluid rounded z-depth-1" %}
    </div>
</div>