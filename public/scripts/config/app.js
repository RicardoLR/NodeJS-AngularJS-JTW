var app = angular.module('app', ['ngRoute', 'angular-jwt', 'angular-storage']);

app.run( ["$rootScope", 'jwtHelper', 'store', '$location', 
	function($rootScope, jwtHelper, store, $location){
		
		/** routeChangeStart es un evento  broadcast */
		$rootScope.$on('$routeChangeStart', function (event, next) {


			$rootScope.token = store.get("token") || null;
			
			if(!$rootScope.token)
				if(next.$$route.templateUrl == "templates/login.html") $location.path("/login");
				else if(next.$$route.templateUrl == "templates/registro.html") $location.path("/registro");
				else $location.path("/index");

			if($rootScope.token)
				if(next.$$route.templateUrl == "templates/login.html" || next.$$route.templateUrl == "templates/registro.html") 
					$location.path("/home");
				
			var bool = jwtHelper.isTokenExpired(store.get('token'));
			if(bool === true)
				$location.path("/login");

		});
	}
])