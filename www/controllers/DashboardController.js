angular.module('DashboardController', [])
.controller('DashboardController', function($scope, $cordovaSms) {
  $scope.title = "My Dashboard";

  document.addEventListener("deviceready", function () {

        var smsList = [];
        var interceptEnabled = false;


    /*WifiWizard.setWifiEnabled(true, function(){
      document.getElementById('info').innerHTML = "Connected To Wifi...";
    }, function(error){
        cosole.log("Error : "+error);
    });*/

     document.addEventListener('onSMSArrive', function(e){
        var data = e.data;
        smsList.push( data );        
        document.getElementById('info').innerHTML = JSON.stringify( data );        
      });


    // device Ready Ends
  });
})