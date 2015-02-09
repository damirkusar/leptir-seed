var welcome = angular.module('welcome', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

welcome.config(function($stateProvider) {
    /* Add New States Above */
});

welcome.controller('WelcomeCtrl',function($scope){
    $scope.WelcomeTest = "Remove me in WelcomeCtrl";
});
