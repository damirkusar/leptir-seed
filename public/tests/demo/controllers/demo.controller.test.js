'use strict';

require('../../../app');

var testObjectName = 'DemoCtrl';
var dependencies = require('../test.dependencies');

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
        expect(scope.ModuleTest).toBe('Modify me in Demo Module');
    });
});