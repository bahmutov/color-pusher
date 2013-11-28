(function (angular) {
  var app = angular.module('color-pusher');
  app.controller('colorCtrl', function ($scope) {
    $scope.baseSelector = '.alert-info';
    $scope.triadOneSelector = '.alert-success';
    $scope.triadTwoSelector = '.alert-warning';

    $scope.baseColor = $.xcolor.random().getHex();

    function computeColors() {
      var triad = $.xcolor.triad($scope.baseColor);
      check.verify.array(triad,
        'could not get triad array from base color ' + $scope.baseColor);
      $scope.triadOne = triad[1].getHex();
      $scope.triadTwo = triad[2].getHex();
    }

    computeColors();

    $scope.applyColors = function () {
      $($scope.baseSelector).css({
        backgroundColor: $scope.baseColor
      });
      $('#baseColorSample').css({
        backgroundColor: $scope.baseColor
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

    $scope.$watch('baseColor', function () {
      if ($scope.baseColor.length === 7) {
        computeColors();
        $scope.applyColors();
      }
    });
  });
}(angular));
