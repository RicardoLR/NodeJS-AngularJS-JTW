angular.module('app')



    .controller('loginCtrl', 
        ['$scope','CONFIG', 'authFactory', 'jwtHelper', 'store', '$location',
        function($scope, CONFIG, authFactory, jwtHelper, store, $location){
        	$scope.login = function(user){
                authFactory.login(user).then(function(res){

                    console.log('res', res);
                    if(res.data.success){
                        store.set('token', res.data.token);
                        $location.path("/home");
                    }
                });
            }
    }])
