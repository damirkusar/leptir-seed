var page1 = angular.module('page1', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

page1.config(function($stateProvider) {
    //$stateProvider
    //    .state('page1', {
    //        url: "/page1",
    //        templateUrl: "modules/page1/page1.html"
    //    });

    $stateProvider.
        state("page1",
        {
            url: "/page1",
            views: {
                "": {
                    templateUrl: "modules/page1/page1.html"
                },
                "nav": {
                    templateUrl: "modules/nav/nav.html"
                },
                "footer": {
                    templateUrl: "modules/footer/footer.html"
                }
            }
        });
});

page1.controller('Page1Ctrl',function($scope){
    $scope.Page1Test = "Modify me in Page1 Module";
});