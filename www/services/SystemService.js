angular.module('SystemService',[])
.service('SystemService', function(){
	return {
			isWifiEnabled: function(){
				WifiWizard.setWifiEnabled(true, function(){
			     var status =  {"wifiEnabled": true};
			    }, function(error){
			        var status =  [{"wifiEnabled": false, "hint":error}];
			    })		
			     alert (JSON.stringify(status))
			     return (JSON.stringify(status))
			}
		} 
	});