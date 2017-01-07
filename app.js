(function () {
'use strict';

angular.module('First', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakov";
  $scope.sayHello = function () {
    return "Hello Coursera Hellooooo!";
  };
});

})();
