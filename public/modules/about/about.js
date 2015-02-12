var about = angular.module('about', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

about.config(function($stateProvider) {
    /* Add New States Above */
});

about.controller('AboutCtrl',function($scope){
    $scope.AboutTest = "Modify me in About Module";
});
