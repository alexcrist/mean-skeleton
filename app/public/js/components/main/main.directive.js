(function() {
    'use strict';

    function main() {
        return {
            restrict: 'E',
            templateUrl: '/js/components/main/main.template.html',
            controller: 'MainController',
            controllerAs: 'ctrl'
        };
    }

    angular.module('main', []).directive('main', main);
})();