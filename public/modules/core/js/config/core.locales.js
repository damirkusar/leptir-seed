'use strict';

angular.module('core').config(function($translateProvider) {
    $translateProvider
        .translations('en', {
            coreHeadline: 'Hey, this is in core module a headline text in english!'
    })
        .translations('de', {
            coreHeadline: 'Hey, das ist im core modul ein headline text in Deutsch!'
    });
    $translateProvider.preferredLanguage('en');
});