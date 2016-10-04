'use strict';

angular.module('home')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state("home",
            {
                parent: "root",
                url: "/",
                views: {
                    "": {
                        template: '<home></home>'
                    }
                }
            });
    }]);