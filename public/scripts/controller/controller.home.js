angular.module('app')


    .controller('homeCtrl', 
        ['$scope','CONFIG', 'jwtHelper', 'store', 
        function($scope, CONFIG, jwtHelper, store) {
            
            //obtenemos el token en localStorage
            var token = store.get("token");
            
            //decodificamos para obtener los datos del user
            var tokenPayload = jwtHelper.decodeToken(token);

            console.log("homeCtrl   tokenPayload", tokenPayload);
            
            //los mandamos a la vista como user
            $scope.user = tokenPayload;

    }])
