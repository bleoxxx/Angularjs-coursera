(function () {
'use strict';

angular.module('myFirstApp', []);

.controller('myFirstController', function ($scope) {
  $scope.name = "Bleo";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});
})();
