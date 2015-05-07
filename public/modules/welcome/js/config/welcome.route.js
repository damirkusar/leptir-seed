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
                },
                "footer@parent": {
                    controller: "FooterCtrl",
                    templateUrl: "partials/footer/views/footer.html"
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
                    templateUrl: "modules/welcome/views/welcome.html"
                }
            }
        });
});