'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'NavCtrl';

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

    it('PartialTest is correct', function() {
        expect(scope.PartialTest).toBe("Modify me in Core Module's Nav Controller");
    });

    it('topBarMenu is defined', function() {
        expect(scope.topBarMenu).toBeDefined();
    });

    it('topBarMenuItems is defined', function() {
        expect(scope.topBarMenuItems).toBeDefined();
    });

    it('localeMenu is defined', function() {
        expect(scope.localeMenu).toBeDefined();
    });

    it('localMenuItems is defined', function() {
        expect(scope.localeMenuItems).toBeDefined();
    });
});