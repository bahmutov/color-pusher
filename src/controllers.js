(function (angular) {
  var app = angular.module('color-pusher');
  app.controller('colorCtrl', function ($scope) {

    $scope.defaultSettings = {
      control: 'hue',
      position: 'bottom left',
      theme: 'bootstrap',
      change: function (hue) {
        if (hue.length !== 7) {
          return false;
        }
      }
    };

    $scope.colors = {
      baseColor: '#ff00ff'
    };

    $scope.hueSettings = angular.copy($scope.defaultSettings);

    $scope.baseSelector = '.alert-info';
    $scope.triadOneSelector = '.alert-success';
    $scope.triadTwoSelector = '.alert-warning';

    function computeColors() {
      var triad = $.xcolor.triad($scope.colors.baseColor);
      check.verify.array(triad,
        'could not get triad array from base color ' + $scope.colors.baseColor);
      $scope.triadOne = triad[1].getHex();
      $scope.triadTwo = triad[2].getHex();
    }

    computeColors();

    $scope.applyColors = function () {
      $($scope.baseSelector).css({
        backgroundColor: $scope.colors.baseColor
      });

      $($scope.triadOneSelector).css({
        backgroundColor: $scope.triadOne
      });
      $('#triadOneSample').css({
        backgroundColor: $scope.triadOne
      });

      $($scope.triadTwoSelector).css({
        backgroundColor: $scope.triadTwo
      });
      $('#triadTwoSample').css({
        backgroundColor: $scope.triadTwo
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
