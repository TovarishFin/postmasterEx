angular.module('MainCtrlMod',[])
  .controller('HomeCtrl',['$scope', 'MainServ', function($scope, MainServ){
    $scope.info={};
    $scope.createPostage=function(){
      MainServ.createPostage($scope.info)
        .then(function(data, err){
          if(err){
            console.log(err);
            $scope.infoSent=true;
          } else {
            $scope.response=data.data;
            $scope.infoSent=true;
          };
        });
    };
  }])
