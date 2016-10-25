'use strict';

angular
  .module('app')
  .controller('MessageCtrl', ['$scope', '$state', 'Message', function($scope,
                                                                $state, Message) {
    $scope.messages = [];

    function getMessages() {
      Message
        .find()
        .$promise
        .then(function(results) {
          $scope.messages = results;
        });
    }

    getMessages();
  }]);
