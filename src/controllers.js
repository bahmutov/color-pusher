(function (angular) {
  var app = angular.module('color-pusher');
  app.controller('colorCtrl', function ($scope) {

    $scope.defaultSettings = {
      control: 'hue',
      position: 'bottom left',
      theme: 'bootstrap'
    };

    $scope.colors = {
      baseColor: '#ff00ff',
      triadOne: '',
      triadTwo: ''
    };

    $scope.hueSettings = angular.copy($scope.defaultSettings);

    $scope.baseSelector = '.alert-info';
    $scope.triadOneSelector = '.alert-success';
    $scope.triadTwoSelector = '.alert-warning';

    function computeColors() {
      var triad = $.xcolor.triad($scope.colors.baseColor);
      check.verify.array(triad,
        'could not get triad array from base color ' + $scope.colors.baseColor);
      $scope.colors.triadOne = triad[1].getHex();
      $scope.colors.triadTwo = triad[2].getHex();
    }

    computeColors();

    $scope.applyColors = function () {
      $($scope.baseSelector).css({
        backgroundColor: $scope.colors.baseColor
      });

      $($scope.triadOneSelector).css({
        backgroundColor: $scope.colors.triadOne
      });

      $($scope.triadTwoSelector).css({
        backgroundColor: $scope.colors.triadTwo
      });
    };

    $scope.$watch('colors.baseColor', function () {
      if ($scope.colors.baseColor.length === 7) {
        computeColors();
        $scope.applyColors();
      }
    });
  });
}(angular));
