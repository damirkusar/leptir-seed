'use strict';

angular.module('demo').config(function($stateProvider) {
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
                    controller: "WelcomeCtrl",
                    templateUrl: "modules/demo/views/partial.html"
                }
            }
        });
});