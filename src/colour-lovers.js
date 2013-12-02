(function (angular) {
  var app = angular.module('color-pusher');

  app.controller('ColourLoversCtrl', function ColourLoversCtrl($scope, $http) {
    $scope.paletteId = '';
    $scope.placeholder = '3148032 or http://www.colourlovers.com/palette/3148032/The_Sky_Opens_Up';

    $scope.isValidPalette = function () {
      return check.webUrl($scope.paletteId) ||
        check.positiveNumber(+$scope.paletteId);
    };

    $scope.fetchPalette = function (target) {
      try {
        if (check.webUrl($scope.paletteId)) {
          $scope.paletteId = /palette\/\d+\//.exec($scope.paletteId)[0];
          $scope.paletteId = /\d+/.exec($scope.paletteId)[0];
        }
      } catch (err) {
        alertify.error('Could not parse palette ' + $scope.paletteId);
        return;
      }
      console.log('fetching pallette', $scope.paletteId);
      $scope.fetchingPalette = true;

      var url = 'http://www.colourlovers.com/api/palette/' + $scope.paletteId;
      var options = {
        url: url,
        params: {
          format: 'json',
          jsonCallback: 'JSON_CALLBACK'
        }
      };
      $http.jsonp(url, options)
      .success(function (data) {
        if (!data[0]) {
          alertify.error('Undefined palette returned for id ' + $scope.paletteId);
          return;
        }
        console.log('pallete', data[0]);
        check.verify.colors(data[0].colors);
        target.setColors(data[0].colors);
      })
      .error(function () {
        alertify.error('Could not fetch palette ' + $scope.paletteId);
      })
      .finally(function () {
        $scope.fetchingPalette = false;
      });
    };
  });
}(angular));
