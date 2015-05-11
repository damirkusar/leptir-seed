'use strict';

angular.module('core')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/welcome');

        $stateProvider
            .state("root",
            {
                views: {
                    "": {
                        template: '<div ui-view=""></div>'
                    },
                    "nav": {
                        controller: "NavCtrl",
                        templateUrl: "partials/nav/views/index.html"
                    },
                    "footer": {
                        controller: "FooterCtrl",
                        templateUrl: "partials/footer/views/index.html"
                    }
                }
            }
        );
    }).run(['$state', function ($state) {
        $state.transitionTo('welcome');
    }]);