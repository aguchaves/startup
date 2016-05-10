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
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/main");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "../views/main.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "../views/about.html"
    });
});
