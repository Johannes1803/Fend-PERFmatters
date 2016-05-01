<<<<<<< HEAD
# Website Performance Optimization portfolio project
## General Goal:
	Improve performance of Camerons portfolio website

## Page Speed Optimization
I optimized the PageSpeed of index.html to score higher than 90 on PageSpeed Insights.

To optimize the CRP I set up a grunt task. If you want to execute the Grunt Task do as follows:
1. In Terminal cd to the folder and run `npm install`
2. The following plugins need to be installed,
using `npm install <module> --save-dev`
1. [imagemin](https://www.npmjs.com/package/grunt-contrib-imagemin)
2. [cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin)
3. [uglify](https://www.npmjs.com/package/grunt-contrib-uglify)
4. [cache-breaker](https://www.npmjs.com/package/grunt-cache-breaker)
5. [htmlmin](https://www.npmjs.com/package/grunt-contrib-htmlmin)

3. Run Grunt with `grunt`
4. If you only want a specific task run `grunt [plugin]`
	For plugin insert one of the following:
	- `imagemin`: Optimize Images		
	-`cssmin`: Minimize CSS
	- `uglify`: minimize JS
	- `cachebreaker`: Activate browser caching
	- `htmlmin`: reduce HTML

## Frames per Second

In order to improve framerate for views/pizza.html I did the following improvements on main.js ( Check the comments for more details):
a) function changePizzaSizes around line 427
-  Random Pizza container: store Pizzas instead of using querrySelectors multiple times
-  improve for-loop

b) function updatePositions around line 490
- select pizza elements by class instead of querry selector
- move document.body.scrollTop out of the loop
- use a counter var instead of modulo
- create way less than 200 pizza elements

c) On css/style.css I edited the styles of the .mover class (around line 30) to add a layer for every pizza element and thus avoid Repainting the entire window.
