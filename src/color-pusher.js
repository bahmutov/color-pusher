(function colorPusher(angular) {
  var pusher = angular.module('color-pusher', ['color-pusher-widget']);

  pusher.controller(['$scope', colorPusherCtrl]);

  function colorPusherCtrl($scope) {
    console.log('color pusher ctrl');
    $scope.$on('apply-color', function onApplyColor(event, data) {
      console.log('applying color', data);
    });
  }
}(angular));
