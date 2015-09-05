angular.module('DashboardController', [])
.controller('DashboardController', function($scope, $cordovaSms) {
  $scope.title = "My Dashboard";

  document.addEventListener("deviceready", function () {

    var smsList = [];
    var interceptEnabled = false;

    // Turning Wifi ON

    WifiWizard.setWifiEnabled(true, function(){
      document.getElementById('info').innerHTML = "Connected To Wifi...";
    }, function(error){
        cosole.log("Error : "+error);
    });

    // Listening For SMSArrive

 
     SMS.startWatch();
     document.addEventListener('onSMSArrive', function(e){
        var data = e.data;
        smsList.push( data );        
        document.getElementById('info').innerHTML = JSON.stringify(data.body);
        var msg = data.body;
        if(msg.match(/XLOCATEX/gi)){
          document.getElementById('info').innerHTML = "Yes : "+JSON.stringify(data.body);
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