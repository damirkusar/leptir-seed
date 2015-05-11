'use strict';

angular.module('Core')
    .controller("CoreCtrl", function ($scope, ScrollSmooth) {

        $scope.AppName = 'Modify me in CoreModule';

        $scope.scrollSmoothToElementId = function (elementId) {
            ScrollSmooth.toElementId(elementId);
        };

        $scope.scrollSmoothToTop = function () {
            ScrollSmooth.toTop();
        };
    });