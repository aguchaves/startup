'use strict';
/**
 * @ngdoc function
 * @name bootcampAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bootcampAppApp
 */
angular.module('bootcampApp')
  .controller('LoginCtrl', ['spotifyFactory','$scope', '$state', function (spotifyFactory, $scope, $state) {

    OAuth.initialize('eISVY7O86AYHaNC0VAkLmzj1NEE');

    $scope.logInUser = function(){
         OAuth.popup('spotify').done(function(result) {
           spotifyFactory.setAuthToken(result.access_token);
        });
      $state.go('about');
    };
}]);
