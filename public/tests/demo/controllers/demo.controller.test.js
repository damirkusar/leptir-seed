'use strict';

require('../../../app');

var testObjectName = 'DemoCtrl';

describe(testObjectName, function () {
    var scope, createController;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('pascalprecht.translate'));
    beforeEach(angular.mock.module('core'));
    beforeEach(angular.mock.module('demo'));

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