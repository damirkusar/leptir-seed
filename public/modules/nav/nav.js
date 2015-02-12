var nav = angular.module('nav', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

nav.config(function($stateProvider) {
    /* Add New States Above */
});

nav.controller('NavCtrl',function($scope){
    $scope.NavTest = "Modify me in Nav Module";
});
