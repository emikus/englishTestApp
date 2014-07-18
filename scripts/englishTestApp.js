'use strict';

angular
  .module('englishTestApp', [
    'ngRoute',
    'dataStorage'
  ])
  .constant('TEMPLATES_URL', 'views/exercises/exerciseNr/tasktaskNr.tpl.html')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/exercise/:exerciseNr/taskNr/:taskNr', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/exercise/3/taskNr/1'
      });
  });
