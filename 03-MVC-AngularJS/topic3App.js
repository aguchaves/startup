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
        controller: "MoviesCtrl"
        })
});

topic3App.controller('MoviesCtrl',['$scope','$state','store', function($scope, $state, store){  
    
    
    $scope.movieClicked = store.get('movieClicked');
    
    
    $scope.movieDetails = function(movieClicked){
        store.set("movieClicked", movieClicked);
        $state.go("details");
    }
    $scope.movies = [{
        "name":"Godfather",
        "id": "1",
        "year": "1972",
        "director": "Francis Ford Coppola",
        "genre": "Crime/Drama",
        "sinopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
        },
    {   
        "name":"Pulp Fiction",
        "id": "2",
        "year": "1994",
        "director": "Quentin Tarantino",
        "genre": "Crime/Drama",
        "sinopsis": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
        },
    {
        "name": "The Departed",
        "id": "3",
        "year": "3006",
        "director": "Martin Scorsese",
        "genre": "Thriller",
        "sinopsis": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
        },
     {                
        "name": "Trainspotting",
        "id": "4",
        "year": "1996",
        "director": "Danny Boyle",
        "genre": "Drama",
        "sinopsis": "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends."
        },
     {
         "name": "Pearl Harbor",
         "id": "5",
        "year": "2001",
        "director": "Michael Bay",
        "genre": "Drama/History",
        "sinopsis": "Pearl Harbor follows the story of two best friends, Rafe and Danny, and their love lives as they go off to join the war."
        }                      
             ];
    }
    
]);