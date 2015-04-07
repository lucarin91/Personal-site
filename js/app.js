"use strict";

angular.module('PersonalSite',[
  'ngRoute',
  'Controllers',
  'Factories'
  ])
.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'html/home.html',
    controller: 'HomeCtrl'
  })
  .when('/curriculum', {
    title: 'curriculum',
    templateUrl: 'html/curriculum.html',
    controller: 'CurriculumCtrl',
    resolve: {
      curriculum:function(JsonLoader){
        return JsonLoader.get('json/curriculum.json');
      },
      skills:function(JsonLoader){
        return JsonLoader.get('json/skills.json');
      }
    }
  })
  .when('/project',{
    title: 'project',
    templateUrl: 'html/project.html',
    controller: 'ProjectCtrl',
    resolve: {}
  })
  .when('/contact',{
    title: 'contact',
    templateUrl: 'html/contact.html',
    controller: 'ContactCtrl',
    resolve: {}
  })
  .otherwise({
    redirectTo: '/'
  });
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
}]);
