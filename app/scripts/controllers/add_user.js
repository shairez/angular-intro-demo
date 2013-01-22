'use strict';

angularDemoApp.controller('AddUserCtrl', function(userService, $scope) {
  
  	$scope.user = {};

  	$scope.addUser = function(){
  		userService.users.push($scope.user);
  		$scope.user = {};
  	}
});
