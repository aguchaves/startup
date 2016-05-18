'use strict';

/**
 * @ngdoc overview
 * @name bootcampAppApp
 * @description
 * # bootcampAppApp
 *
 * Main module of the application.
 */
angular
  .module('bootcampApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angular-storage'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "../views/login.html",
      controller: 'LoginCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "../views/about.html",
      controller: 'AboutCtrl'
    })
    .state('playlist', {
      url: "/playlist",
      templateUrl: "../views/playlist.html",
      controller: 'PlaylistCtrl'
    })
    .state('newPL', {
      url: "/new",
      templateUrl: "../views/newplaylist.html",
      controller: 'NewplaylistCtrl'
    });
});
