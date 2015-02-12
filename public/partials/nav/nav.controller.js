var nav = angular.module('nav', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

nav.controller('NavCtrl',function($scope){
    $scope.NavTest = "Modify me in Nav Module";
});
