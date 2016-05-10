var topic3App = angular.module('topic3App');

topic3App.controller('CreateCtrl',['$scope','$state','topic3Factory', function($scope, $state, topic3Factory){  
        
    $scope.saveMovie = function (){
        topic3Factory.addNewMovie($scope.movie);
        $state.go("movies");
    }    
        
}]);