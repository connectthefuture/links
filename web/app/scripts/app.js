'use strict';

window.pd = function() { console.log.apply(console, arguments) }

angular
  .module('App', [
    'ngAnimate',
    'ngCookies',
    'myResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })
      .when('/analysis', {
        templateUrl: 'views/analysis.html',
        controller: 'AnalysisCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });