'use strict';

angular.module('core')
    .controller("CoreCtrl", ['$scope', 'ScrollSmooth', function ($scope, ScrollSmooth) {

        $scope.AppName = 'Modify me in Core Module';
        $scope.ModuleTest = 'Modify me in Core Module';

        $scope.scrollSmoothToElementId = function (elementId) {
            ScrollSmooth.toElementId(elementId);
        };

        $scope.scrollSmoothToTop = function () {
            ScrollSmooth.toTop();
        };
    }]);