# CPM_catmull_rom_interpolation
interpolation tool base on [dearfox's work](https://github.com/DearFox/cpm-tools) but with catmull rom interpolation for a smoother curve.

this respitory have two files:

-animation.js contains the function you will have to add to your animation.js file of your model to make the animation work.
there are multiple function, the one you need depend on what funtion you used (in the worst case, you can add all of them, they are not incompatible

-[CPM_interpolation.html](https://val9k.github.io/CPM_catmull_rom_interpolation/CPM_interpolation.html) : upload your animation file from blockbench on this page and put the output lines in the updatefunction of your animation.js . (option explane later in the read_me file)

# Info :
the catmull interpolation require 4 point to calculate the cuver between the two middle point:
It work great on lopping animation but if your animation doesn't loop, make sur to add a point before and one after the animation (one with a negative time and one after the end of the animation) so that the curve is calculated corectly.

catmull rom interpolation is smoother than a linear one but is heavy on clculation. if you don't need this interpolation, i recommand you use dearFox's tool as it will be lighter on calculation.

also, the catmull rom interpolation is calculated if the animation is save as an smooth animation in blockbench. if you see that the output function have a lot of [0,0,X,X], it means that some segment are calculated with linear interpolation, go back in blockbench, select your keyframe and change the interpolation to smooth.

# Option :

there are 3 option on the page beside the file selectore and the load button :

-"Use a custom time variable" and "timer variable:" : this option allows you to use an other variable than entity.age for the time of the animation. For exemple, i usally use an other variable link to the walking speed for my walking animation. Note that the field is use only if the checkbox is checked and if not checked, the feild is not read.

-"force the catmull rom interpolation" : By default, the tool use the interpolation specified in the file. if checked, the tool will use catmull rom for every segment. (this option doesn't need a defferent function to work)

-"use bone pointer instead of bone name" : By default, the interpolation function (mine and dearfox's one) use entity.getBone(). however, it is not recommanded to use that function a lot (if you have multiple animation or animation with a lot of bone). to use this, you have to have variable of the same name of the bone pointing to the bone in your animation file (exemple : if you have a bone name "potato", you have in your animation.js : var potato (befor the init() function) and potato = model.getBone("potato"); (in the init() function)
if you are not sure what you are doing, don't use this option.

# Credit :

Thanks to dearFox for their linear interpolation tool, this is just an adaptation of their tool with an other algorithm but i don't know how to code html page so i copy their page.
