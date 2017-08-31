angular.module('app')


	.controller('clubsCtrl', 
		['$scope','$location','CONFIG', 'jwtHelper', 'store', 'getClubsService', 
		function($scope, $location, CONFIG, jwtHelper, store, getClubsService) {
			
			//obtenemos el token en localStorage
			var token = store.get("token");
			
			//decodificamos para obtener los datos del user
			var tokenPayload = jwtHelper.decodeToken(token);
			
			//los mandamos a la vista como user
			$scope.user = tokenPayload;
			$scope.getClubs = 'Cargando...';

			getClubsService.get().then(function(res){

				if(res.data){
					$scope.getClubs = res.data.data;

					$scope.getClubs.forEach(function(item, i) {
					  $scope.getClubs[i] = { item, limite: 20};
					});
				}
			});


			$scope.mostrarMas=function(id){

				$scope.getClubs.forEach(function(item, i) {
					if($scope.getClubs[i].item.id == id )
						$scope.getClubs[i].limite = 1000;
					else
						$scope.getClubs[i].limite = 20;
				});
			};


	}])

