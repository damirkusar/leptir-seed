var about = angular.module('footer', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

about.config(function($stateProvider) {
    /* Add New States Above */
});

about.controller('FooterCtrl',function($scope){
    $scope.FooterTest = "Modify me in Footer Module";
});


angular.module('AppName').controller('FooterCtrl2',function($scope){
    $scope.FooterTest2 = "Modify me in Footer Module 2";
});