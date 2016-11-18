// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'lbServices',
    'ui.router',
	'ngResource'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
	  .state('exchange', {
        url: '/exchange',
        templateUrl: 'views/exchange.html',
        controller: 'ExchangeController'
      })
	  .state('news', {
        url: '/news',
        templateUrl: 'views/news.html',
        controller: 'NewsController'
      });

    $urlRouterProvider.otherwise('/');
  }]);
