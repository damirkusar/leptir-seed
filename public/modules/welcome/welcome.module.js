var welcome = angular.module('welcome', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

welcome.config(function($stateProvider) {
    $stateProvider.
    state("welcome",
        {
            parent: "root",
            url: "/welcome",
            views: {
                "": {
                    controller: "WelcomeCtrl",
                    templateUrl: "modules/welcome/welcome.html"
                }
            }
        });
});

welcome.controller('WelcomeCtrl',function($scope){
    $scope.WelcomeTest = "Modify me in Welcome Module";
    $scope.AboutTest = "Modify me in Welcome Module";
});
