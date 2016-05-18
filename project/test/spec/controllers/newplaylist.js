'use strict';

describe('Controller: NewplaylistCtrl', function () {

  // load the controller's module
  beforeEach(module('bootcampAppApp'));

  var NewplaylistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewplaylistCtrl = $controller('NewplaylistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewplaylistCtrl.awesomeThings.length).toBe(3);
  });
});
