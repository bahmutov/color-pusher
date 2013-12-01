# color-pusher v0.0.5

> Dynamic color swatch manipulation for changing multiple elements CSS

[demo](http://glebbahmutov.com/color-pusher/)

![color-pusher screenshot](docs/color-pusher.jpg)

The color-pusher widget allows anyone to quickly tweak colors on the page,
including by theme / similarity / complementary.
Now you can give the website to the graphic designer and let them
explore and push colors.

### installation

Requires [nodejs](http://nodejs.org/) and [bower](http://bower.io/)

```sh
bower install color-pusher
```

To use: requires bootstrap, jquery and angularjs.




### use

```html
<!-- include css and js in document's head -->
<link rel="stylesheet" href="bower_components/color-pusher/dist/color-pusher.css">
<script src="bower_components/color-pusher/dist/color-pusher.js"></script>

<!--
    include widget as stand alone Angular module
    at the end of the body for example
-->
<div ng-app="color-pusher">
    <color-pusher></color-pusher>
</div>
```




Uses [jQuery xcolor](http://www.xarg.org/project/jquery-color-plugin-xcolor/) plugin
to manipulate colors.
Uses [jquery-minicolors](http://labs.abeautifulsite.net/jquery-minicolors/) color picker
via [angular-minicolors](http://kaihenzler.github.io/angular-minicolors/).

## History


0.0.5 / 2013-12-01
==================

  * created nicer angular directive
  * removed bootstrap js min
  * compiling into widget
  * setting border color same as background

0.0.4 / 2013-11-30
==================

  * switched default text color strategy to auto
  * fetching colourlover palette using API, fixes #5
  * you can set strategy for generating text color, fixes #9
  * colors and selectors adjust dynamically to generated colors

0.0.3 / 2013-11-29
==================

  * you can set strategy for generating text color, fixes #9
  * colors and selectors adjust dynamically to generated colors
  * added different color generation strategies

0.0.2 / 2013-11-28
==================

  * every color allows color picker or edit

0.0.1 / 2013-11-28
==================

  * added grunt gh-pages task
  * added small color samples to input fields
  * recomputing everything on changed based color, and applying colors

0.0.0 / 2013-11-27
==================

  * added grunt tasks
  * initial

