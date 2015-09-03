angular.module('DashboardController', [])
.controller('DashboardController', function($scope, $cordovaSms) {
  $scope.title = "My Dashboard";
  document.addEventListener("deviceready", function () {
    
    $scope.sendSMS = function(){      
        var number = document.getElementById('mobileNumber').value;
        var message = document.getElementById('message').value;

         var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: ''  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        $cordovaSms
          .send(number, message, options)
          .then(function() {
            alert("SMS Sent");
          }, function(error) {
            alert("Error Sending SMS");
          });
    }

    // Get Wifi Info.
    function success(data){
      alert(data);
      document.getElementById('info').html(data)
    }

    function fail(data){
      alert(data);
      document.getElementById('info').html(data)
    }

    WifiWizard.setWifiEnabled(true, function(){
      document.getElementById('info').html(data)
    }, function(error){
        cosole.log("Error : "+error)
    });


    // device Ready Ends
  });
})