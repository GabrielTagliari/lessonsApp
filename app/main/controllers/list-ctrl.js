'use strict';
angular.module('main')
.controller('ListCtrl', function ($log, $http, $scope) {

  $log.log('Hello from your Controller: ListCtrl in module main:. This is your controller:', this);

  $http.get("https://demo4522569.mockable.io/list")
    .then(function(response) {
        $scope.lessons = response.data;
  });

});
