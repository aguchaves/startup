var topic3App = angular.module('topic3App');

topic3App.controller('EditCtrl',['$scope','$state','topic3Factory', function($scope, $state, topic3Factory){  
    
    $scope.movie = topic3Factory.getMovieClicked(); 
    
    $scope.saveMovie = function (){
        topic3Factory.saveEdition($scope.movie);
        $state.go("movies");
    }    
        
}]);