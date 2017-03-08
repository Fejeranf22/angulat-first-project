//  main #1 controller in our html
app.controller("mainCtr",function($scope){
  $scope.name = "Ty Fejerang";

  $scope.login = function(){
    console.log("Email:" + $scope.email);
    console.log("Password:" + $scope.password);

    $scope.email ="";
    $scope.password = "";

  }
});
