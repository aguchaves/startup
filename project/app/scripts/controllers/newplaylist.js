'use strict';

/**
 * @ngdoc function
 * @name bootcampAppApp.controller:NewplaylistCtrl
 * @description
 * # NewplaylistCtrl
 * Controller of the bootcampAppApp
 */
angular.module('bootcampApp')
  .controller('NewplaylistCtrl', ['spotifyFactory','$scope',
              '$state', function (spotifyFactory, $scope, $state) {

                $scope.UserInfo = {};
                $scope.currentPlaylist = spotifyFactory.getCurrentPlaylist();
                $scope.currentPlaylist.tracks = [];
                $scope.newPLName = '';

                $scope.saveNewPlaylist = function (){
                  spotifyFactory.getUserInfo().then(function(result){
                    $scope.UserInfo = result;
                    var options = {name: $scope.newPLName};
                    spotifyFactory.createNewPlaylist($scope.UserInfo.id, options).then(function(data){
                    spotifyFactory.savePlaylist($scope.UserInfo.id, data.id, $scope.currentPlaylist.tracks).then(function(plResult){
                        $state.go('about');
                    }, function(error){

                    });
                      console.log(data);
                    },function(error){

                    });
                  },function(error){

                  });
                  $scope.search = [];
                };
                
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
}]);
