'use strict';

/**
 * @ngdoc service
 * @name bootcampAppApp.spotify
 * @description
 * # spotify
 * Factory in the bootcampAppApp.
 */
var bootcampApp = angular.module('bootcampApp');

bootcampApp
  .factory('spotifyFactory', ['store', '$q', '$http', function (store, $q, $http) {

      var that = this;

      this.config = {
          clientId : null,
          redirectUri : null,
          scope : null,
          authToken : null
      }

//-------------------CLIENT CONFIG

       this.setClientId = function (clientId) {
        this.clientId = clientId;
        return this.clientId;
      };

      this.getClientId = function () {
        return this.clientId;
      };

//-------------------------------API
//...............................config

      this.spoty = function (endURL, method, parameters, data, headers){

          var promi = $q.defer();
          $http({
              url : this.spotyURL + endURL,
              method : method ? method : 'GET',
              params : parameters,
              data : data,
              headers : headers
          })
          .success(function(data){
            promi.resolve(data);
          })
          .error(function(data){
            promi.reject(data);
          });
          return promi.promise;
      };

      this.spotyURL = 'https://api.spotify.com/v1';

//...............................Authorization

      this.setAuthToken = function (authToken) {
        this.authToken = authToken;
        store.set('authToken', authToken);
        return this.authToken;
      };

      this.getAuthToken = function () {
        if(store.get('authToken')){
          this.authToken = store.get('authToken');
          return this.authToken;
        }
      };

      this.spotyAuth = function(isJson){
                var auth = {
                    'Authorization' : 'Bearer ' + this.getAuthToken()
                };
                if (isJson){
                    auth['Content-Type'] = 'application/json';
                }
                return auth;
            };

//...........................Redirect Uri

      this.setRedirectUri = function (redirectUri) {
        this.redirectUri = redirectUri;
        return this.redirectUri;
      };

      this.getRedirectUri = function () {
        return this.redirectUri;
      };

//-----------------------PLAYLISTS---------------------------

//.......................GENERAL

      this.getUserPlaylists = function (userId) {
            return this.spoty('/users/' + userId + '/playlists', 'GET', null, null, this.spotyAuth());
          };

      this.getPlaylist = function (userId, playlistId) {
            return this.spoty('/users/' + userId + '/playlists/' + playlistId, 'GET', null, null, this.spotyAuth());
          };

      this.createNewPlaylist= function (userId, options) {
                return this.spoty('/users/' + userId + '/playlists', 'POST', null, options, this.spotyAuth(true));
          };

      this.savePlaylist = function(userId, playlistId, tracks){
              var tracksToBeSaved = [];
              tracks.forEach(function(track){
                  tracksToBeSaved.push(track);
              }, tracksToBeSaved);
              if(tracksToBeSaved){
                  tracksToBeSaved.forEach(function(track, index){
                    tracksToBeSaved[index] = 'spotify:track:' + track.id;
                  });
              }

          return this.spoty('/users/' + userId + '/playlists/'+ playlistId + '/tracks', 'PUT', {
            uris: tracksToBeSaved.toString(),
            position: null
          }, null, this.spotyAuth(true));
        };

//............................TRACKS

      this.getPlaylistTracks = function (userId, playlistId) {
            return this.spoty('/users/' + userId + '/playlists/' + playlistId + '/tracks', 'GET', null, null, this.spotyAuth());
          };

      this.addPlaylistTracks = function (userId, playlistId, tracks, options) {
            if(tracks != undefined){
                angular.forEach(tracks, function (value, index) {
                  tracks[index] = 'spotify:track:' + value;
                });
            };
            return this.spoty('/users/' + userId + '/playlists/' + playlistId + '/tracks', 'POST',
              tracks.toString(), null, this.spotyAuth(true));
      };

//........................CURRENT

      this.setCurrentPlaylist = function(playlist){
            store.set('playList', playlist);
            this.currentPlaylist = playlist;
      };

      this.getCurrentPlaylist = function(){
          var playListStored = store.get('playList');
          return playListStored;
      };

      this.addTrackInCurrentPlaylist = function (track) {
          this.getCurrentPlaylist().tracks.push(track);
      };

//-----------------------USER-----------------------------

      this.getUserInfo = function () {
            return this.spoty('/me', 'GET', null, null, this.spotyAuth());
      };

      this.setUserData = function (data) {
        this.userData = data;
        store.set('userData', data)
      };

//----------------------SEARCH

      this.searchQuery = function(query, type){
          var options = { limit: 7 };
          options.q = query;
          options.type = type;
          return this.spoty('/search', 'GET', options);
      };

    return {

        setClientId : function (clientId){
            that.setClientId(clientId);
        },

        getClientId : function (){
            return that.getClientId();
        },

        setAuthToken : function (authToken){
            that.setAuthToken(authToken);
        },

        getAuthToken : function (){
            that.getAuthToken();
        },

        setRedirectUri : function (redirectUri){
            that.setRedirectUri(redirectUri);
        },

        getRedirectUri : function (){
            return that.getRedirectUri();
        },

        setScope : function (scope){
            that.setScope(scope);
        },

        spoty : function (endURL, method, parameters, data, headers){
            return that.spoty(endURL, method, parameters, data, headers);
        },

        spotyAuth : function (isJson){
            return that.spotyAuth(isJson);
        },

        getUserPlaylists : function (userId){
            return that.getUserPlaylists(userId);
        },

        getPlaylist : function (userId, playlistId, options){
            return that.getPlaylist(userId, playlistId, options);
        },

        getPlaylistTracks : function (userId, playlistId, options){
            return that.getPlaylistTracks(userId, playlistId, options);
        },

        addPlaylistTracks : function (userId, playlistId, tracks, options){
            return that.addPlaylistTracks(userId, playlistId, tracks, options);
        },

        getUserInfo : function (){
            return that.getUserInfo();
        },

        setCurrentPlaylist : function (playlist){
            return that.setCurrentPlaylist(playlist);
        },

        getCurrentPlaylist : function (){
            return that.getCurrentPlaylist();
        },

        addTrackInCurrentPlaylist : function (track) {
            return that.addTrackInCurrentPlaylist(track);
        },

        searchQuery : function (query, track){
            return that.searchQuery(query, track);
        },

        createNewPlaylist : function (userId, options){
            return that.createNewPlaylist(userId, options);
        },

        savePlaylist : function (userId, playlistId, tracks) {
            return that.savePlaylist(userId, playlistId, tracks);
        }

    };
  }]);
