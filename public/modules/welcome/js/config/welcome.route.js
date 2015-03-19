'use strict';

angular.module('welcome').config(function($stateProvider) {
    $stateProvider.
        state("welcome",
        {
            parent: "root",
            url: "/welcome",
            views: {
                "": {
                    controller: "WelcomeCtrl",
                    templateUrl: "modules/welcome/views/welcome.html"
                }
            }
        });
});