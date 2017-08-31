angular.module('app')

    .controller('indexCtrl', 
        ['$scope','CONFIG', 'authFactory', 'jwtHelper', 'store', '$location', 
        function($scope, CONFIG, authFactory, jwtHelper, store, $location){

            console.log("indexCtrl...");
    }]);

