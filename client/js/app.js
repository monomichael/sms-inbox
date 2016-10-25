'use strict';

angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
                                                            $urlRouterProvider) {
    $stateProvider
      .state('inbox', {
        url: '',
        templateUrl: 'js/message/templates/message.html',
        controller: 'MessageCtrl'
      });
    $urlRouterProvider.otherwise('inbox');
  }]);
