angular.module('app')

    /** Pedimos token */
    .factory("authFactory", ["$http", "$q", "CONFIG", function($http, $q, CONFIG){
    	
        return {
    		login: function(user){
    			var deferred;
                deferred = $q.defer();
                $http({
                    method: 'POST',
                    skipAuthorization: true,
                    url: CONFIG.APIURL+'/usuario/authenticate',
                    data: {"email" : user.email, "password" : user.password},
                    headers: {'Content-Type': 'application/json'}
                })

                .then(function(res){
                    console.log("res", res);

                    deferred.resolve(res);
                })
                .then(function(error){
                    console.log("error", error);

                    deferred.reject(error);
                })
                return deferred.promise;
    		}
    	}
    }])

