angular.module('app')


    .controller('registrpCtrl', 
        ['$scope','$location','CONFIG', 'jwtHelper', 'store', 'registroService', 
        function($scope, $location, CONFIG, jwtHelper, store, registroService) {
            

            $scope.usuario = {};

            $scope.registro = function(){
                registroService.post($scope.usuario).then(function(res){

                    if(res.data){
                        $location.path("/login");
                    }
                });
            };
    }]);
