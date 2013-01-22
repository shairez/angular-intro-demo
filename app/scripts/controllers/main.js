'use strict';

angularDemoApp.controller('MainCtrl', function($scope) {

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
});
