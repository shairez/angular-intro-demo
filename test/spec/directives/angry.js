'use strict';

describe('Directive: angry', function() {
  beforeEach(module('angularDemoApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<angry></angry>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the angry directive');
  }));
});
