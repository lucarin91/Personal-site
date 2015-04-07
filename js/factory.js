"use strict";

angular.module('Factories',[])
.factory('JsonLoader',['$http',
  function($http){
    return {
      get: function(path){
        return $http({
          method: 'GET',
          url: path
        });
      }
    }
}]);
