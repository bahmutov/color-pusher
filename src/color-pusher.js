(function colorPusher(angular) {
  var pusher = angular.module('color-pusher',
    ['color-pusher-widget', 'colour-lovers']);

  pusher.controller('color-pusher', ['$scope', colorPusherCtrl]);

  function colorPusherCtrl($scope) {
    $scope.$on('apply-colors', function onApplyColor(event, colors) {
      check.verify.object(colors, 'expected colors to be an object ' +
        JSON.stringify(colors, null, 2));

      Object.keys(colors).forEach(function (selector) {
        var css = colors[selector];
        $(selector).css(css);
      });
    });
  }
}(angular));
