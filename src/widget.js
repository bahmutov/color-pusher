(function (angular) {
  console.assert(pusher, 'missing pusher.color plugin');

  var widget = angular.module('color-pusher-widget',
    ['minicolors', 'ui.bootstrap', 'color-pusher-widget.templates']);

  function colorPusherDirective() {
    return {
      restrict: 'E',
      templateUrl: 'widget.tpl.html',
      replace: true,
      transclude: false,
      link: function (scope, element, attrs) {
        if (check.unemptyString(attrs.selectors)) {
          scope.selectors = attrs.selectors.split(',').map(function (str) {
            return str.trim();
          });
        }
        if (check.unemptyString(attrs.colors)) {
          scope.colors = attrs.colors.split(',').map(function (str) {
            return str.trim();
          });
          check.verify.colors(scope.colors);
        }
        scope.generateForegroundColors();

        // make sure modal dialog appears in the center of the body
        // and not just the widget
        $('#shareResultsModal').detach().appendTo('body');
      },
      controller: ['$scope', colorCtrl]
    };
  }

  widget.directive('colorPusher', colorPusherDirective);

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

    $scope.colorsToShare = function () {
      var result = {};
      $scope.colors.forEach(function (color, index) {
        result[$scope.selectors[index]] = {
          'background-color': color,
          'color': $scope.textColors[index]
        };
      });
      return result;
    };

    $scope.setColors = function (list) {
      check.verify.colors(list);
      $scope.lastGeneration = null;
      $scope.colors = list;
      $scope.applyColors();
    };

    $scope.applyColors = function () {
      this.generateForegroundColors();

      var css = {};

      $scope.colors.forEach(function (color, k) {
        var selector = $scope.selectors[k];
        if (color && check.unemptyString(selector)) {
          var textColor = $scope.textColors[k];
          check.verify.color(textColor, 'missing text color for index ' + k);

          css[selector] = {
            backgroundColor: color,
            borderColor: color,
            color: textColor
          };
        }
      });

      $scope.$emit('apply-colors', css);
    };

    function swapWithNext(list, k) {
      check.verify.array(list, 'missing array');
      // cannot swap last item with next one
      console.assert(k >= 0 && k < list.length - 1, 'invalid selector index ' + k);

      var tmp = list[k];
      list[k] = list[k + 1];
      list[k + 1] = tmp;
    }

    $scope.swapSelector = function (k) {
      // cannot swap last selector with next one
      console.assert(k >= 0 && k < $scope.selectors.length - 1, 'invalid selector index ' + k);

      swapWithNext($scope.selectors, k);
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

    $scope.removeColor = function (index) {
      check.verify.number(index, 'expected color index to be a number ' + index);
      console.assert(index >= 0 && index < $scope.colors.length,
        'invalid color index ' + index);

      $scope.colors.splice(index, 1);
      $scope.selectors.splice(index, 1);
      $scope.textColors.splice(index, 1);
      $scope.textColorStrategy.splice(index, 1);
    };

    $scope.addColor = function () {
      $scope.colors.push('#efefef');
      $scope.selectors.push('');
      $scope.textColors.push('#000000');
      $scope.textColorStrategy.push('auto');
    };
  }

}(angular));
