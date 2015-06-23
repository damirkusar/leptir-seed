'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'CoreCtrl';

describe(objectToTest, function () {
    var scope, createController;

    dependencies.configureDepencencies();

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller(objectToTest, {
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