'use strict';

require('../../../app');

var ctrlName = 'CoreCtrl';

describe(ctrlName, function () {
    var scope, createController;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('core'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller(ctrlName, {
                '$scope': scope
            });
        };
        createController();
    }));

    it('AppName is correct', function() {
        expect(scope.AppName).toBe('Modify me in Core Module');
    });

    it('ModuleTest is correct', function() {
        expect(scope.ModuleTest).toBe('Modify me in Core Module');
    });

    it('scrollSmoothToElementId is defined', function() {
        expect(scope.scrollSmoothToElementId).toBeDefined();
    });

    it('scrollSmoothToTop is defined', function() {
        expect(scope.scrollSmoothToTop).toBeDefined();
    });
});