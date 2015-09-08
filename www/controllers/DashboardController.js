angular.module('DashboardController', [])
.controller('DashboardController', function($scope, $cordovaSms, SmsService, SystemService) {
  $scope.title = "My Dashboard";

  document.addEventListener("deviceready", function () {    
    
    var smsList = [];
    var interceptEnabled = false;

    // Turning Wifi ON

    var wifiEnabled = SystemService.isWifiEnabled();
    zdocument.getElementById('info').innerHTML = JSON.stringify(wifiEnabled);
    

    // Listening For SMSArrive

 
     SMS.startWatch();
     document.addEventListener('onSMSArrive', function(e){
        var data = e.data;
        smsList.push( data ); 
        senderPhoneNumber =  data.address;     
        document.getElementById('info').innerHTML = JSON.stringify(data);
        var msg = data.body;

        // If match found

        if(msg.match(/XLOCATE/gi)){
         var onSuccess = function(position){
              var number = data.address;
              var text  = "http://www.rahulmishra.com/t/?query=https://maps.googleapis.com/maps/api/geocode/json?latlng="
                +position.coords.latitude+","
                +position.coords.longitude;
              var res = SmsService.sendSms(number, text);
              document.getElementById('info').innerHTML = res;
          }
          navigator.geolocation.getCurrentPosition(onSuccess);         

        } else{
          document.getElementById('info').innerHTML = "No : Irrelevant Message";
        }
      });

     // Setting Background Mode

     cordova.plugins.backgroundMode.setDefaults({
        resume: false,
     })

     cordova.plugins.backgroundMode.enable();
  });
})