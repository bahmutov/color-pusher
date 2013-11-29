(function (angular) {
  var app = angular.module('color-pusher');
  app.controller('colorCtrl', function ($scope) {

    $scope.defaultSettings = {
      control: 'hue',
      position: 'bottom left',
      theme: 'bootstrap'
    };
    $scope.hueSettings = angular.copy($scope.defaultSettings);

    $scope.colors = ['#ff00ff'];
    $scope.textColors = ['#ffffff'];
    $scope.lastGeneration = 'triad';
    $scope.selectors = ['.alert-info', '.alert-success', '.alert-warning'];

    $scope.applyColors = function () {
      $scope.colors.forEach(function (color, k) {
        var selector = $scope.selectors[k];
        if (color && check.unemptyString(selector)) {
          var textColor = $scope.textColors[k];
          check.verify.color(textColor, 'missing text color for index ' + k);
          $(selector).css({
            backgroundColor: color,
            color: textColor
          });
        }
      });
    };

    $scope.$watch('colors[0]', function () {
      if (check.color($scope.colors[0])) {
        $scope[$scope.lastGeneration]();
        $scope.applyColors();
      }
    });

    function isCloserToWhiteThanBlack(color) {
      check.verify.color(color, 'expected color, got ' + color);
      return $.xcolor.distance(color, 'black') > $.xcolor.distance(color, 'white');
    }

    $scope.generateColors = function (operation) {
      check.verify.unemptyString(operation, 'missing generation operation');
      $scope.lastGeneration = operation;

      var baseColor = $scope.colors[0];
      check.verify.color(baseColor,
        'expected base color, have ' + baseColor);

      var generated = $.xcolor[operation](baseColor);
      check.verify.array(generated,
        'could not get triad array from base color ' + baseColor);
      $scope.colors = generated.map(function (c) {
        return c.getHex();
      });

      $scope.textColors = $scope.colors.map(function (backgroundColor) {
        var complement = $.xcolor.complementary(backgroundColor);
        if ($.xcolor.readable(complement, backgroundColor)) {
          return complement.getHex();
        }
        return isCloserToWhiteThanBlack(backgroundColor) ? '#000000' : '#ffffff';
      });
    };

    ['triad', 'tetrad', 'analogous',
      'monochromatic', 'splitcomplement'].forEach(function (op) {
      $scope[op] = $scope.generateColors.bind($scope, op);
    });

    $scope.triad();
  });
}(angular));
