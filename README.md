# CPM_catmull_rom_interpolation
interpolation tool base on [dearfox's work](https://github.com/DearFox/cpm-tools) but with catmull rom interpolation for a smoother curve.

this respitory have two files:

-animation.js contains the function you will have to add to your animation.js file of your model to make the animation work.

-[CPM_interpolation.html](https://val9k.github.io/CPM_catmull_rom_interpolation/CPM_interpolation.html) : upload your animation file from blockbench on this page and put the output lines in the updatefunction of your animation.js .

# Info :
the catmull interpolation require 4 point to calculate the cuver between the two middle point:
It work great on lopping animation but if your animation doesn't loop, make sur to add a point before and one after the animation (one with a negative time and one after the end of the animation) so that the curve is calculated corectly.

catmull rom interpolation is smoother than a linear one but is heavy on clculation. if you don't need this interpolation, i recommand you use dearFox's tool as it will be lighter on calculation.

also, the catmull rom interpolation is calculated if the animation is save as an smooth animation in blockbench. if you see that the output function have a lot of [0,0,X,X], it means that some segment are calculated with linear interpolation.

# Credit :

Thanks to dearFox for their linear interpolation tool, this is just an adaptation of their tool with an other algorithm but i don't know how to code html page so i copy their page.
