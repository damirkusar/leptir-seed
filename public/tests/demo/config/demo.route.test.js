'use strict';

require('../../../app');

var objectToTest = 'DemoRouterConfig';

describe(objectToTest, function () {
    var rootScope,
        state,
        location;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('pascalprecht.translate'));
    beforeEach(angular.mock.module('core'));
    beforeEach(angular.mock.module('demo'));

    beforeEach(inject(function ($rootScope, $state, $location) {
        rootScope = $rootScope;
        state = $state;
        location = $location;
    }));

    it('should respond demo state', function() {
        expect(state.href('demo')).toEqual('#/demo');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/demo');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/demo");
    });
});