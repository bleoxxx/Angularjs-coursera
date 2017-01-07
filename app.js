(function () {
'use strict';

var app = angular.module('lunchChecker', [])
    app.controller('lunchMessage', function ($scope) {
       $scope.ButtonClick = function () {
            $scope.Message = "Button clicked."
        }
    });

})();
