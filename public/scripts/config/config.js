angular.module('app')
	.constant('CONFIG', {
		APIURL: "http://localhost:8080/api",
	})

	.config(["$routeProvider", "$httpProvider", "jwtInterceptorProvider",  
		function ($routeProvider, $httpProvider, jwtInterceptorProvider) {
			
			$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
			
			jwtInterceptorProvider.tokenGetter = ['authFactory', function(authFactory) {

				console.log("jwtInterceptorProvider    authFactory");

				return localStorage.getItem('token');
			}];

			$httpProvider.interceptors.push('jwtInterceptor');

			$routeProvider.when('/', {
				redirectTo: "/index"
			})       
			.when("/index", {
				templateUrl: 'templates/index.html',
				controller: 'indexCtrl',
				authorization: false
			}) 
			.when("/login", {
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl',
				authorization: false
			})

			.when("/registro", {
				templateUrl: 'templates/registro.html',
				controller: 'registrpCtrl',
				authorization: false
			})
			
			.when("/home", {
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl',
				authorization: true
			})
			
			.when("/clubs", {
				templateUrl: 'templates/clubs.html',
				controller: 'clubsCtrl',
				authorization: true
			})

			.when("/subscribers", {
				templateUrl: 'templates/subscribers.html',
				controller: 'subscribersCtrl',
				authorization: true
			})
			

			.otherwise({
		        redirectTo: '/index'
	    	});

	}])