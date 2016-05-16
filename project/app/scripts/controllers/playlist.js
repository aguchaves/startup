'use strict';

/**
 * @ngdoc function
 * @name bootcampAppApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the bootcampAppApp
 */
angular.module('bootcampApp')
  .controller('PlaylistCtrl', ['spotifyFactory','$scope',
              '$state', function (spotifyFactory, $scope, $state) {

      $scope.UserInfo = {};
      $scope.currentPlaylist = spotifyFactory.getCurrentPlaylist();
      $scope.currentPlaylist.tracks = [];

      spotifyFactory.getUserInfo().then(function(data){
        $scope.UserInfo = data;
        console.log($scope.currentPlaylist);
        spotifyFactory.getPlaylistTracks($scope.UserInfo.id,
          $scope.currentPlaylist.id).then(function(result){
            console.log(result.items);
            result.items.forEach(function(track){
            $scope.currentPlaylist.tracks.push(track.track);
            });
          }, function(error){
          });
      }, function(error){
      });
      console.log($scope.playlistsTracks);

      $scope.search = [];
      $scope.query = "";
      $scope.searchQuery = function () {
        var query = $scope.query;
        if(query != ""){
          spotifyFactory.searchQuery(query, 'track')
            .then(function(result){
              $scope.search = result.tracks.items;
          }, function(error){

          });
        }else{
          $scope.search = [];
        };
      };

      $scope.addSelectedTrack = function (track) {
        console.log($scope.currentPlaylist);
        spotifyFactory.addTrackInCurrentPlaylist(track);
        $scope.currentPlaylist = spotifyFactory.getCurrentPlaylist();
      };

      $scope.saveNewPlaylist = function (){
        spotifyFactory.savePlaylist($scope.UserInfo.id, $scope.currentPlaylist.id, $scope.currentPlaylist.tracks);
        $state.go('playlist');
        $scope.search = [];
      };
  }]);
