'use strict';

angularDemoApp.controller('MainCtrl', function($scope, userService) {

  $scope.users = [
    {name: "Bar", huggable: true, image: "images/bar.png"},
    {name: "Tzahi", huggable: false, image: "images/tzahi.jpg"},
    {name: "Natalie", huggable: true, image: "images/natalie.jpeg"},
    {name: "Fuad", huggable: true, image: "images/fuad.jpg"},
    {name: "Angie", huggable: false, image: "images/angie.jpeg"},
    {name: "Berlad", huggable: true, image: "images/berlad.jpg"}
  ];

  $scope.showRules = false;

  $scope.toggleShowRules = function(){
  	$scope.showRules = !$scope.showRules;
  }

  	$scope.huggableClass = function(user){
        return (user.huggable) ? "huggable" : "not-huggable";
    }

    $scope.huggableStatus = function(user){
       return (user.huggable) ? "Sure" : "Not right now";
    }
});
