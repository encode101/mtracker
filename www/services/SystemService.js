angular.module('SystemService',[])
.service('SystemService', function($http, $q, SmsService){
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
			sendLocation: function(number){
				var onSuccess = function(position){
	              var text  = "http://www.rahulmishra.com/t/?query=https://maps.googleapis.com/maps/api/geocode/json?latlng="
	                +position.coords.latitude+","
	                +position.coords.longitude;		              
	              var res = SmsService.sendSms(number, text);
				  document.getElementById('info').innerHTML = res;
	          	}
          		navigator.geolocation.getCurrentPosition(onSuccess);    
			}
		} 
	});