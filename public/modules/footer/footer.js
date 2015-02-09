var about = angular.module('footer', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

about.config(function($stateProvider) {
    /* Add New States Above */
});

about.controller('FooterCtrl2',function($scope){
    $scope.FooterTest2 = "Remove me in FooterCtrl2";
});


angular.module('AppName').controller('FooterCtrl',function($scope){
    $scope.FooterTest = "Remove me in FooterCtrl";
});