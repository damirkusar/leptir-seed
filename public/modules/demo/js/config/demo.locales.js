'use strict';

angular.module('demo').config(function($translateProvider) {
    $translateProvider
        .translations('en', {
            demoHeadline: 'Hey, this is in demo module a headline text in english!'
    })
        .translations('de', {
            demoHeadline: 'Hey, das ist im demo modul ein headline text in Deutsch!'
    });
});