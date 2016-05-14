'use strict';

/**
 * @ngdoc function
 * @name bootcampApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootcampAppApp
 */
angular.module('bootcampApp')
  .controller('AboutCtrl', ['spotifyFactory','$scope', '$state', function (spotifyFactory, $scope, $state) {

      $scope.UserInfo = {};
      $scope.userPlaylist = [];
      spotifyFactory.getUserInfo().then(function(data){
          $scope.UserInfo = data;
          spotifyFactory.getUserPlaylists($scope.UserInfo.id).then(function(data){
              data.items.forEach(function(playlist){
                if($scope.UserInfo.id === playlist.owner.id){
                  $scope.userPlaylist.push(playlist);
                };
              });
          }, function(error){
            });
      }, function(error){
        });
      $scope.enterPlaylist = function(playlist){
        spotifyFactory.setCurrentPlaylist(playlist);
        $state.go("playlist");
      };
  }]);
