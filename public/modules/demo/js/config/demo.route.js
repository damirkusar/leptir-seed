'use strict';

angular.module('demo').config(['$stateProvider', function($stateProvider) {
    $stateProvider.
        state("demo",
        {
            parent: "root",
            url: "/demo",
            views: {
                "": {
                    controller: "DemoCtrl",
                    templateUrl: "modules/demo/views/index.html"
                },
                "demo.partial@demo": {
                    controller: "DemoCtrl",
                    templateUrl: "modules/demo/views/partial.html"
                }
            }
        });
}]);
