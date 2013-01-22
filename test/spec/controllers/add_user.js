'use strict';

describe('Controller: AddUserCtrl', function() {

  // load the controller's module
  beforeEach(module('angularDemoApp'));

  var AddUserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    AddUserCtrl = $controller('AddUserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
