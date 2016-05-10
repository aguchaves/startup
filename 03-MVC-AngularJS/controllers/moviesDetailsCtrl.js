var topic3App = angular.module('topic3App');

topic3App.controller('DetailsCtrl',['$scope','$state','topic3Factory', function($scope, $state, topic3Factory){  
    
    $scope.movieClicked = topic3Factory.getMovieClicked(); 
    
    $scope.editMovie = function(movieClicked){
        topic3Factory.setMovieClicked(movieClicked);
        $state.go("edit");
    }
        
}]);