(function (angular) {
  var app = angular.module('color-pusher');

  function colorPusherDirective() {
    return {
      restrict: 'E',
      templateUrl: 'color-pusher.tpl.html',
      replace: true,
      link: function () {
      },
      controller: ['$scope', colorCtrl]
    };
  }

  app.directive('colorPusher', colorPusherDirective);

  function colorCtrl($scope) {
    console.assert($.xcolor, 'missing jquery.xcolor plugin');
    var xcolor = $.xcolor;

    $scope.defaultSettings = {
      control: 'hue',
      position: 'bottom left',
      theme: 'bootstrap'
    };
    $scope.hueSettings = angular.copy($scope.defaultSettings);

    $scope.colors = ['#ff00ff'];
    $scope.textColors = ['#ffffff'];
    $scope.textColorStrategy = ['auto'];

    $scope.lastGeneration = 'triad';
    $scope.selectors = ['.alert-info', '.alert-success', '.alert-warning', 'body', '.well'];

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

    $scope.$watch('colors[0]', function () {
      if (check.color($scope.colors[0])) {
        if ($scope.lastGeneration) {
          $scope[$scope.lastGeneration]();
        }
        $scope.applyColors();
      }
    });

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

    $scope.triad();
  }

}(angular));
