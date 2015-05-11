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
                        templateUrl: "modules/core/views/nav.html"
                    },
                    "footer": {
                        controller: "FooterCtrl",
                        templateUrl: "modules/core/views/footer.html"
                    }
                }
            }
        );
    }).run(['$state', function ($state) {
        $state.transitionTo('welcome');
    }]);