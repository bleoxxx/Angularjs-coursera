(function () {
'use strict';

angular.module('lunchChecker', [])

.controller('lunchMessage', function($scope) {
    $scope.clickMe= function(){
         alert("hi there");
   }
});

})();
