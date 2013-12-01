(function (angular) {
  console.assert(pusher, 'missing pusher.color plugin');

  var app = angular.module('color-pusher');

  function colorPusherDirective() {
    return {
      restrict: 'E',
      templateUrl: 'color-pusher.tpl.html',
      replace: true,
      link: function (scope, element, attrs) {
        if (check.unemptyString(attrs.selectors)) {
          scope.selectors = attrs.selectors.split(',');
        }
        if (check.unemptyString(attrs.colors)) {
          scope.colors = attrs.colors.split(',');
          check.verify.colors(scope.colors);
        }
      },
      controller: ['$scope', colorCtrl]
    };
  }

  app.directive('colorPusher', colorPusherDirective);

  function colorCtrl($scope) {
    console.assert($.xcolor, 'missing jquery.xcolor plugin');
    var xcolor = $.xcolor;

    $scope.showColorPusher = false;

    $scope.defaultSettings = {
      control: 'hue',
      position: 'bottom left',
      theme: 'bootstrap'
    };
    $scope.hueSettings = angular.copy($scope.defaultSettings);

    $scope.colors = ['#f5e384', '#9c846e', '#9c046e', '#6e889c', '#9c846e', '#9c4242'];
    $scope.textColors = ['#ffffff'];
    $scope.textColorStrategy = ['auto'];

    $scope.lastGeneration = null;
    $scope.selectors = ['body', '.well',
      '.alert-info', '.alert-success', '.alert-warning', '.alert-danger'];

    $scope.setColors = function (list) {
      check.verify.colors(list);
      $scope.lastGeneration = null;
      $scope.colors = list;
      $scope.applyColors();
    };

    $scope.applyColors = function () {
      this.generateForegroundColors();

      $scope.colors.forEach(function (color, k) {
        var selector = $scope.selectors[k];
        if (color && check.unemptyString(selector)) {
          var textColor = $scope.textColors[k];
          check.verify.color(textColor, 'missing text color for index ' + k);
          $(selector).css({
            backgroundColor: color,
            borderColor: color,
            color: textColor
          });
        }
      });
    };

    function isCloserToWhiteThanBlack(color) {
      check.verify.color(color, 'expected color, got ' + color);
      return xcolor.distance(color, 'black') > xcolor.distance(color, 'white');
    }

    function textColor(backgroundColor, strategy) {
      if (strategy === 'white') { return '#ffffff'; }
      if (strategy === 'black') { return '#000000'; }

      check.verify.color(backgroundColor, 'expected background color ' + backgroundColor);
      var complement = xcolor.complementary(backgroundColor);
      if (xcolor.readable(complement, backgroundColor)) {
        return complement.getHex();
      }
      return isCloserToWhiteThanBlack(backgroundColor) ? '#000000' : '#ffffff';
    }

    $scope.generateColors = function (operation) {
      check.verify.unemptyString(operation, 'missing generation operation');
      $scope.lastGeneration = operation;

      var baseColor = $scope.colors[0];
      check.verify.color(baseColor,
        'expected base color, have ' + baseColor);

      var generated = xcolor[operation](baseColor);
      check.verify.array(generated,
        'could not get triad array from base color ' + baseColor);
      $scope.colors = generated.map(function (c) {
        return c.getHex();
      });

      this.generateForegroundColors();
    };

    $scope.generateForegroundColors = function () {
      $scope.textColorStrategy = $scope.colors.map(function (color, k) {
        var strategy = $scope.textColorStrategy[k];
        if (check.unemptyString(strategy)) {
          return strategy;
        }
        return 'auto';
      });

      $scope.textColors = $scope.colors.map(function (backgroundColor, k) {
        var strategy = $scope.textColorStrategy[k];
        return textColor(backgroundColor, strategy);
      });
    };

    ['triad', 'tetrad', 'analogous',
      'monochromatic', 'splitcomplement'].forEach(function (op) {
      $scope[op] = $scope.generateColors.bind($scope, op);
    });

    function isValidHSVProperty(property) {
      var properties = {
        'hue': true,
        'saturation': true,
        'value': true
      };
      return properties[property];
    }

    $scope.changeColor = function (index, property, delta) {
      console.assert(index >= 0 && index < $scope.colors.length, 'invalid color index ' + index);
      console.assert(isValidHSVProperty(property), 'invalid property ' + property);
      check.verify.unemptyString(delta, 'delta should be a string, not ' + delta);
      // todo: check if delta starts with + or -

      var hex6 = $scope.colors[index];
      check.verify.unemptyString(hex6, 'missing color for index ' + index + ' have ' + hex6);
      if (!/^#/.test(hex6)) {
        hex6 = '#' + hex6;
      }
      var c = pusher.color(hex6);

      // todo: allow wrapping around 0 / 360 for hue, saturation
      c = c[property](delta);
      hex6 = c.hex6().toLowerCase();
      $scope.colors[index] = hex6;

      $scope.applyColors();
    };
  }

}(angular));
