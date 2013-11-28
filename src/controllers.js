(function (angular) {
  var app = angular.module('color-pusher');
  app.controller('colorCtrl', function ($scope) {
    $scope.baseColor = $.xcolor.random().getHex();
    $scope.baseSelector = '.alert-info';

    var triad = $.xcolor.triad($scope.baseColor);
    check.verify.array(triad,
      'could not get triad array from base color ' + $scope.baseColor);
    $scope.triadOne = triad[1].getHex();
    $scope.triadTwo = triad[2].getHex();

    $scope.triadOneSelector = '.alert-success';
    $scope.triadTwoSelector = '.alert-warning';

    $scope.applyColors = function () {
      $($scope.baseSelector).css({
        backgroundColor: $scope.baseColor
      });

      $($scope.triadOneSelector).css({
        backgroundColor: $scope.triadOne
      });

      $($scope.triadTwoSelector).css({
        backgroundColor: $scope.triadTwo
      });
    };
  });
}(angular));
