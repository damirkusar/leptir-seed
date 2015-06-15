'use strict';

angular.module('core').config(function($translateProvider) {
    $translateProvider.
        useStaticFilesLoader({
            prefix: 'modules/core/resources/locale-',
            suffix: '.json'
        });
    $translateProvider.preferredLanguage('en_US');
});