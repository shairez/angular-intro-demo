'use strict';

var angularDemoApp = angular.module('angularDemoApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add_user', {
        templateUrl: 'views/add_user.html',
        controller: 'AddUserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
