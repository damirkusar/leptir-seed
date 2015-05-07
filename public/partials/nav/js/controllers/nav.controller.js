'use strict';

angular.module('nav').controller('NavCtrl', ['$scope', 'Menus', function($scope, Menus){
    $scope.NavTest = "Modify me in Nav Module";

    $scope.topBar = Menus.getMenu('topBar');
    $scope.topBarItems = $scope.topBar.items;
}]);