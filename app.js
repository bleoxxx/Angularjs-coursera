(function () {
'use strict';

angular.module('lunchChecker', [])

.controller('lunchMessage', function ($scope) {
  $scope.eatMessage = "Yaakov";
  $scope.sayHello = function () {
    return "Hello Coursera Hellooooo!";
  };
});

})();
