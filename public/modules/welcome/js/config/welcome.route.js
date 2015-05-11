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
                    templateUrl: "modules/welcome/views/index.html"
                },
                "welcome.partial@welcome": {
                    controller: "WelcomeCtrl",
                    templateUrl: "modules/welcome/views/partial.html"
                }
            }
        })
        .state("welcome.test",
        {
            parent: "root",
            url: "/welcomeTest",
            views: {
                "": {
                    controller: "WelcomeCtrl",
                    templateUrl: "modules/welcome/views/welcomeTest.html"
                }
            }
        });
});