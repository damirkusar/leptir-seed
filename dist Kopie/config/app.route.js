'use strict';
angular.module('App')
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
                        templateUrl: "common/partials/nav/views/nav.html"
                    },
                    "footer": {
                        controller: "FooterCtrl",
                        templateUrl: "common/partials/footer/views/footer.html"
                    }
                }
            }
        );
    }).run(['$state', function ($state) {
        $state.transitionTo('welcome');
    }]);