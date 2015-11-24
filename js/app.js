var myApp = angular.module('myApp', ['ui.router', 'firebase'])
// Config route provider
.config(function($stateProvider) {
    $stateProvider
  .state('home', {
    url:'/',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
  })
  .state('project', {
    url:'/project',
    templateUrl: 'templates/project.html',
    controller: 'ProjectController',
  })
  .state('about', {
    url:'/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutController',
  })
})

.controller('HomeController', function($scope){

})

.controller('AboutController', function($scope){

})

.controller('ProjectController', function($scope, $firebaseArray){
  var ref = new Firebase("https://portfolio343.firebaseio.com/");
  var projRef = ref.child("projects");
  $scope.projects = $firebaseArray(projRef);
})


