angular.module('SystemService',[])
.service('SystemService', function($http, $q){
	return {
			isWifiEnabled: function(){
				var checkstatus = $q.defer();
				WifiWizard.setWifiEnabled(true, function(){
				     	checkstatus.resolve ({"wifiEnabled": true});
				    }, function(error){
				    	checkstatus.resolve ({"wifiEnabled": false, "hint":error});
				    });
				return checkstatus.promise;
			},
			getTickets: function(){
				return $http.get("http://192.168.1.195:1337/api/v0.1/ticket/find?limit=10", {
					headers:{
						"appKey": "qQasdasdazz3435353fftt2145"
					}
				}).success(function(data){
					return data;
				})
			}
		} 
	});