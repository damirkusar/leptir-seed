'use strict';

require('../../../app');

var objectToTest = 'FooterCtrl';

describe(objectToTest, function () {
    var scope, createController;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('pascalprecht.translate'));
    beforeEach(angular.mock.module('core'));

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
        expect(scope.PartialTest).toBe("Modify me in Core Module's Footer Controller");
    });
});