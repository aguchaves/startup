'use strict';

/**
 * @ngdoc function
 * @name bootcampAppApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the bootcampAppApp
 */
angular.module('bootcampApp')
  .controller('PlaylistCtrl', ['spotifyFactory','$scope', '$state', function (spotifyFactory, $scope, $state) {

      $scope.playlistsTracks = [];
      $scope.UserInfo = {};
      $scope.currentPlaylist = spotifyFactory.getCurrentPlaylist();
      spotifyFactory.getUserInfo().then(function(data){
        $scope.UserInfo = data;
        console.log($scope.currentPlaylist);
        spotifyFactory.getPlaylistTracks($scope.UserInfo.id,
          $scope.currentPlaylist.id).then(function(result){
            console.log(result.items);
            result.items.forEach(function(track){
            $scope.playlistsTracks.push(track.track);
            });
          }, function(error){
          });
      }, function(error){
      });
      console.log($scope.playlistsTracks);
  }]);
