'use strict';

angular.module('core').controller('NavCtrl', ['$scope', 'Menus', function($scope, Menus){
    $scope.PartialTest = "Modify me in Core Module's Nav Controller";

    $scope.topBar = Menus.getMenu('topBar');
    $scope.topBarItems = $scope.topBar.items;
}]);