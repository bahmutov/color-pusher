## use

```html
<!-- include css and js in document's head -->
<link rel="stylesheet" href="bower_components/color-pusher/dist/color-pusher.css">
<script src="bower_components/color-pusher/dist/color-pusher.js"></script>

<!--
    Simple:

    include widget as stand alone Angular module
    at the end of the body for example
-->
<div ng-app="color-pusher">
    <color-pusher></color-pusher>
</div>
```

If you already have an Angular application, add *color-pusher* as a dependency

```js
var app = angular.module('my-app', ['color-pusher']);
```

You can pass initial list of selectors and colors to the widget

```html
<color-pusher
    selectors="body, .well, .info"
    colors="#f5e384, #9c846e, #9c046e">
</color-pusher>
```

Open the widget and click "Apply colors".

