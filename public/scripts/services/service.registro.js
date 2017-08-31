angular.module('app')

    .factory("registroService", ["$http", "$q", "CONFIG", function($http, $q, CONFIG){
        
        return{
            post: function(usuario){
                var deferred;
                deferred = $q.defer();

                $http.post(
                    CONFIG.APIURL+'/usuario',
                    {
                        nombre : usuario.nombre,
                        email : usuario.email,
                        password : usuario.password,
                    }
                )
                .then(function(res){
                    deferred.resolve(res);
                })
                .then(function(error){
                    deferred.reject(error);
                })
                return deferred.promise;
                
            }
        }
    }])

