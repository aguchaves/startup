var topic3App = angular.module('topic3App',['angular-storage', 'ui.router'])

topic3App.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/movies");
  
    $stateProvider
        .state('movies', {
          url: "/movies",
          templateUrl: "src/movies.html",
            controller: "MoviesCtrl"
        })
        .state('details', {
          url: "/details",
          templateUrl: "src/details.html",
        controller: "DetailsCtrl"
        })
         .state('edit', {
          url: "/edit",
          templateUrl: "src/update.html",
        controller: "EditCtrl"
        })
         .state('create', {
          url: "/create",
          templateUrl: "src/update.html",
        controller: "CreateCtrl"
        })
         .state('delete', {
          url: "/delete",
          templateUrl: "src/delete.html",
        controller: "DeleteCtrl"
        })
});

