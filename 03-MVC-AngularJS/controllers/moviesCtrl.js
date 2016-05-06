var topic3App = angular.module('topic3App');

topic3App.controller('MoviesCtrl',['$scope','$state','topic3Factory', function($scope, $state, topic3Factory){
    
    $scope.movies = topic3Factory.getList();
    
    $scope.showDetails = function(movieClicked){
        topic3Factory.setMovieClicked(movieClicked);
        $state.go('details');
    }
    
    $scope.createMovie = function () {
        $state.go('create');
    }
    
    $scope.deleteMovie = function () {
        $state.go('delete');
    }
}]);