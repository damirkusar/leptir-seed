'use strict';
angular.module('App')
    .controller("AppCtrl", function ($scope, ScrollSmooth) {

        $scope.AppName = 'Modify me in AppCtrl';
        $scope.Testing = 'I am testing';

        $scope.scrollSmoothToElementId = function (elementId) {
            ScrollSmooth.toElementId(elementId);
        };

        $scope.scrollSmoothToTop = function () {
            ScrollSmooth.toTop();
        };
    });