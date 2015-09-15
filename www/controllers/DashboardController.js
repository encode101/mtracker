angular.module('DashboardController', [])
.controller('DashboardController', function($scope, $cordovaSms, SmsService, SystemService) {
  $scope.title = "My Dashboard";


  document.addEventListener("deviceready", function () { 

  SMS.startWatch();    
  var smsList = [];
  var interceptEnabled = false;

  // Turning Wifi ON

  var turnWifiOn = function(){
    SystemService.isWifiEnabled().then(function(data){
      $scope.wifiEnabled = data.wifiEnabled;
    })
  }

  // Sample SMS
  

  $scope.sendSMS = function(){
    var recepient = "9545600524";
    var msg = "Sample Message Sent";
    SmsService.sendSms(recepient, msg); 
  }

    
    // Listening For SMSArrive  
     
     document.addEventListener('onSMSArrive', function(e){
        var data = e.data;
        smsList.push( data ); 
        var msg = data.body;

        // If match found

        if(msg.match(/xloc/gi)){
          turnWifiOn();
          SystemService.sendLocation(data.address);
        }
      });

     // Setting Background Mode

     cordova.plugins.backgroundMode.setDefaults({
        resume: false,
     })
     cordova.plugins.backgroundMode.enable();

  });
})