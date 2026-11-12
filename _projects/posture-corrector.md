---
layout: page
title: Dual-MPU Posture Corrector
description: Embedded posture-monitoring prototype using dual IMUs, calibration and motion-state logic, haptic feedback, and Wi-Fi telemetry.
img:
importance: 2
category: systems-embedded
github: https://github.com/kitkiti/Posture-Corrector
---

A real-time embedded posture-monitoring prototype designed to track upper- and lower-back deviations using two MPU6050 inertial sensors.

## Highlights

- Used two MPU6050 IMUs to monitor upper- and lower-back orientation independently.
- Implemented neutral-posture calibration and automatic sitting/walking mode detection.
- Added severity-dependent haptic feedback through servo motors.
- Integrated an ESP8266 for Wi-Fi connectivity and ThingSpeak telemetry.
- Logged posture state, deviation measurements, incident counts, session duration, and quality metrics for later analysis.

## Hardware and software

Arduino-compatible microcontroller, dual MPU6050 IMUs, servo motors, ESP8266, C/C++, I²C, and ThingSpeak.

This was an educational prototype and is not a medical diagnostic device.

[View the source on GitHub](https://github.com/kitkiti/Posture-Corrector)
