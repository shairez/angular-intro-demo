'use strict';

angularDemoApp.controller('AddUserCtrl', function($scope) {
  
  	$scope.users = [];
  	$scope.user = {};

  	$scope.addUser = function(){
  		$scope.users.push($scope.user);
  		$scope.user = {};
  	}
});
