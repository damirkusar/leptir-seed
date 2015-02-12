'use strict';

var app = angular.module('AppName', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'nav', 'about', 'footer', 'welcome', 'page1']);

app.config(function ($stateProvider, $urlRouterProvider) {
    // Add New States Above
    $urlRouterProvider.otherwise('/');

    //$stateProvider
    //    .state('home', {
    //        url: "/",
    //        templateUrl: "main.html"
    //    });

    $stateProvider.
        state("home",
        {
            url: "/",
            views: {
                "": {
                    templateUrl: "main.html"
                },
                "nav": {
                    templateUrl: "modules/nav/nav.html"
                },
                "footer": {
                    templateUrl: "modules/footer/footer.html"
                }
            }
    });
});

app.controller("AppCtrl", function ($scope, ScrollSmooth) {
    $scope.AppName = 'AppName comes here';
    $scope.scrollSmoothToElementId = function (elementId) {
        ScrollSmooth.toElementId(elementId);
    };

    $scope.scrollSmoothToTop = function () {
        ScrollSmooth.toTop();
    };
});

app.run(['$state', function ($state) {
    $state.transitionTo('home');
}])



