angular.module('MainServMod',[])
  .factory('MainServ', ['$http', function($http){
    call={};
    call.createPostage=function(info){
      return $http({
        method: 'POST',
        url: '/',
        data: info,
      });
    };
    return call;
  }]);
