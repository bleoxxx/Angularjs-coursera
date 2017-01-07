(function () {
'use strict';

var VLogin = angular.module('myApp',[]);
      VLogin.controller('lunchMessage', ['$scope',function($scope) {
        $scope.clicked = function(){
    alert("Clicked");
}
}]);
})();
