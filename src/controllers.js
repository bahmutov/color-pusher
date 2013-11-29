(function (angular) {
  var app = angular.module('color-pusher');
  app.controller('colorCtrl', function ($scope) {

    $scope.defaultSettings = {
      control: 'hue',
      position: 'bottom left',
      theme: 'bootstrap'
    };

    $scope.colors = ['#ff00ff'];
    $scope.lastGeneration = 'triad';

    $scope.hueSettings = angular.copy($scope.defaultSettings);

    $scope.baseSelector = '.alert-info';
    $scope.triadOneSelector = '.alert-success';
    $scope.triadTwoSelector = '.alert-warning';

    $scope.applyColors = function () {
      $($scope.baseSelector).css({
        backgroundColor: $scope.colors[0]
      });

      $($scope.triadOneSelector).css({
        backgroundColor: $scope.colors[1]
      });

      $($scope.triadTwoSelector).css({
        backgroundColor: $scope.colors[2]
      });
    };

    $scope.$watch('colors[0]', function () {
      if (check.color($scope.colors[0])) {
        $scope[$scope.lastGeneration]();
        $scope.applyColors();
      }
    });

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
    };

    ['triad', 'tetrad', 'analogous',
      'monochromatic', 'splitcomplement'].forEach(function (op) {
      $scope[op] = $scope.generateColors.bind($scope, op);
    });

    $scope.triad();
  });
}(angular));
