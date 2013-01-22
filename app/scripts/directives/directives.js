'use strict';

angularDemoApp

.directive('angry', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.bind("click", function(){
      	alert("Don't touch me!");
      })
    }
  };
})

.directive('goodMood', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.bind("click", function(){
      	alert("Lets do it!");
      })
    }
  };
})

.directive('thumbnail', function() {
  return {
    restrict: 'E',
    scope: {user: "=userModel"},
    templateUrl: "views/thumbnail.html",
    link: function (scope, element, attrs) {

      scope.huggableClass = function(user){
        return (user.huggable) ? "huggable" : "not-huggable";
      }

      scope.huggableStatus = function(user){
        return (user.huggable) ? "Sure" : "Not right now";
      }
    }
  };
});
