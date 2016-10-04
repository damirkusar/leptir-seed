'use strict';

angular.module('demo').config(['$stateProvider', function($stateProvider) {
    $stateProvider.
        state("demo",
        {
            parent: "root",
            url: "/demo",
            views: {
                "": {
                    template: '<demo></demo>'
                }
            }
        });
}]);
