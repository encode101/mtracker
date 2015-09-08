angular.module('SmsService',[])
.service('SmsService', function(){
	return {
		validatePhoneNumber: function(number){
			if(number.length > 5){
				return true
			} else return false
		},
		sendSms: function (number, text){
			if(this.validatePhoneNumber(number) == true){
			  var successCallback = function(){
                return "SMS Sent Sucessfully!";
              }

              var failureCallback = function(){
                return("###### Failed!");
              }

              SMS.sendSMS(number, text, successCallback, failureCallback);
              return "SMS Sent Sucessfully!";			
			} else {
				return "Invalid Phone Number";
			}			
		} 
	}
});