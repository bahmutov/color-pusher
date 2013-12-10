(function colorPusher(angular) {
  var app = angular.module('color-pusher',
    ['color-pusher-widget', 'color-pusher.tpl.html']);

  app.directive('colorPusher', colorPusherDirective);

  function colorPusherDirective() {
    return {
      restrict: 'E',
      templateUrl: 'color-pusher.tpl.html',
      replace: true,
      link: function (scope, element, attrs) {
        if (attrs.selectors || attrs.colors) {
          scope.$broadcast('selectors-colors', attrs);
        }
      },
      controller: ['$scope', colorPusherCtrl]
    };
  }

  function colorPusherCtrl($scope) {
    $scope.showColorPusher = false;

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
