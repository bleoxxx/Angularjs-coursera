(function () {
'use strict';

var app = angular.module('myApp',[]);
      app.controller('lunchMessage', function ($scope) {
       $scope.ButtonClick = function () {
            $scope.Message = "Please enter data first , Enjoy! , Too Much!"
      }
     }]);
})();
