'use strict';

var app = angular.module('AppName', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'nav', 'about', 'footer', 'welcome', 'page1']);

app.config(function ($stateProvider, $urlRouterProvider) {
    // Add New States Above
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "main.html"
        });
});

app.controller("AppCtrl", function ($scope, ScrollSmooth) {
    $scope.AppName = 'AppName comes here';
    $scope.scrollSmoothToElementId = function (elementId) {
        ScrollSmooth.toElementId(elementId);
    };
});

app.run(['$state', function ($state) {
    $state.transitionTo('home');
}])



