'use strict';

require('../../../app');

describe('DemoCtrl', function () {
    var scope, createController;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('core'));
    beforeEach(angular.mock.module('demo'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('DemoCtrl', {
                '$scope': scope
            });
        };
        createController();
    }));

    it('ModuleTest is correct', function() {
        expect(scope.ModuleTest).toBe('Modify me in Demo Module');
    });
});