'use strict';

var app = angular.module('AppName', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'nav', 'about', 'footer', 'welcome']);

app.config(function ($stateProvider, $urlRouterProvider) {
    // Add New States Above
    $urlRouterProvider.otherwise('/');
});

app.controller("AppCtrl", function ($scope) {
    $scope.AppName = 'AppName comes here';
    /*$scope.scrollSmoothToElementId = function (elementId) {
        ScrollSmooth.toElementId(elementId);
    };*/
});



