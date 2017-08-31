angular.module('app')

	.factory("getClubsService", ["$http", "$q", "CONFIG", function($http, $q, CONFIG){
		
		return{
			get: function(){
				var deferred;
				deferred = $q.defer();

				$http.get(
					CONFIG.APIURL+'/clubs'
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

