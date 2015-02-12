var page1 = angular.module('page1', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

page1.config(function($stateProvider) {
    $stateProvider.
        state("page1",
        {
            parent: "root",
            url: "/page1",
            views: {
                "": {
                    controller: "Page1Ctrl",
                    templateUrl: "modules/page1/page1.html"
                }
            }
        });
});

page1.controller('Page1Ctrl',function($scope){
    $scope.Page1Test = "Modify me in Page1 Module";
});