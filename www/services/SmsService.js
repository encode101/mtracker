angular.module('SmsService',[])
.service('SmsService', function(){
	return {
		sendSms: function (number, text){
			var successCallback = function(){
			  	alert("SMS Sent")
                return ({"smsStatus": true});
              }

              var failureCallback = function(error){
              	alert("Failed To Send SMS")
                return ({"smsStatus": false, "hint":error});
              }

              SMS.sendSMS(number, text, successCallback, failureCallback);		
		}		
	}
});