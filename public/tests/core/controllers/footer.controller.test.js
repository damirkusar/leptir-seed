'use strict';

require('../../../app');

var ctrlName = 'FooterCtrl';

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

    it('PartialTest is correct', function() {
        expect(scope.PartialTest).toBe("Modify me in Core Module's Footer Controller");
    });
});