'use strict';

describe('Filter: playlistsFilter', function () {

  // load the filter's module
  beforeEach(module('bootcampAppApp'));

  // initialize a new instance of the filter before each test
  var playlistsFilter;
  beforeEach(inject(function ($filter) {
    playlistsFilter = $filter('playlistsFilter');
  }));

  it('should return the input prefixed with "playlistsFilter filter:"', function () {
    var text = 'angularjs';
    expect(playlistsFilter(text)).toBe('playlistsFilter filter: ' + text);
  });

});
