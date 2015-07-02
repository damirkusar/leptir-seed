'use strict';

var dependencies = require('../test.dependencies');

var testObjectName = 'DemoCtrl';

describe(testObjectName, function () {
    var scope, createController;

    dependencies.configureDepencencies();

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller(testObjectName, {
                '$scope': scope
            });
        };
        createController();
    }));

    it('ModuleTest is correct', function() {
        expect(scope.ModuleTest).toBe('Modify me in demo Module');
    });
});
