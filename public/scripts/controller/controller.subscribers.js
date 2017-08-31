angular.module('app')


	.controller('subscribersCtrl', 
		['$scope','$location','CONFIG', 'jwtHelper', 'store', 'getSubscribersService', 
		function($scope, $location, CONFIG, jwtHelper, store, getSubscribersService) {
			
			//obtenemos el token en localStorage
			var token = store.get("token");
			
			//decodificamos para obtener los datos del user
			var tokenPayload = jwtHelper.decodeToken(token);

			
			//los mandamos a la vista como user
			$scope.user = tokenPayload;
			$scope.subscribers = 'Cargando...';

			getSubscribersService.get().then(function(res){

				if(res.data)  $scope.subscribers = res.data.data;				
			});

	}]);
