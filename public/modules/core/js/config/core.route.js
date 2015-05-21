'use strict';

angular.module('core')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

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
            })
            .state("home",
            {
                parent: "root",
                url: "/",
                views: {
                    "": {
                        controller: "CoreCtrl",
                        templateUrl: "modules/core/views/index.html"
                    }
                }
            });
    }]).run(['$state', function ($state) {
        $state.transitionTo('home');
    }]);