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
                    templateUrl: "modules/demo/views/demo.html"
                }
            }
        });
});