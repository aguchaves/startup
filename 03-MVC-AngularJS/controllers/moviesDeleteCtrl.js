var topic3App = angular.module('topic3App');

topic3App.controller('DeleteCtrl',['$scope','$state','topic3Factory', function($scope, $state, topic3Factory){
    
    $scope.delete = function (){
        topic3Factory.delete($scope.movie.idMovie);
        $state.go('movies');
    }    
        
}]);