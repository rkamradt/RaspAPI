# RaspAPI

A rest-like API server intended to run on the Raspberry PI and allow blinking LEDs

WIP. So far it only has two endpoints. GET /led/:id and POST /led/:id The GET verb
will turn on the led at pin id, and the post will turn it off. Note that the id is
the PIN NUMBER and not the actual gpio number.

Thanks to https://github.com/JamesBarwell/rpi-gpio.js for the gpio access code!

Note: must be run as root to access the gpio.
