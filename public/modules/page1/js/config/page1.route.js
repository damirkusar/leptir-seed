angular.module('page1').config(function($stateProvider) {
    $stateProvider.
        state("page1",
        {
            parent: "root",
            url: "/page1",
            views: {
                "": {
                    controller: "Page1Ctrl",
                    templateUrl: "modules/page1/views/page1.html"
                }
            }
        });
});