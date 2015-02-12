'use strict';

var app = angular.module('AppName', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'nav', 'footer', 'welcome', 'page1']);

app.config(function ($stateProvider, $urlRouterProvider) {
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
                    templateUrl: "partials/nav/nav.html"
                },
                "footer": {
                    controller: "FooterCtrl",
                    templateUrl: "partials/footer/footer.html"
                }
            }
        });
});

app.controller("AppCtrl", function ($scope, ScrollSmooth) {

    $scope.AppName = 'Modify me in AppCtrl';

    $scope.scrollSmoothToElementId = function (elementId) {
        ScrollSmooth.toElementId(elementId);
    };

    $scope.scrollSmoothToTop = function () {
        ScrollSmooth.toTop();
    };
});

app.run(['$state', function ($state) {
    $state.transitionTo('welcome');
}])



