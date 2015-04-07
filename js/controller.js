"use strict";

angular.module('Controllers',[])

.controller('HomeCtrl',['$scope',
function($scope){

}])
.controller('CurriculumCtrl',['$scope','curriculum','skills',
function($scope,curriculum,skills){
  $scope.curriculum=curriculum.data;
  $scope.skills=skills.data;
}])
.controller('ProjectCtrl',['$scope',
function($scope){

}])
.controller('ContactCtrl',['$scope',
function($scope){

}])
