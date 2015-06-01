'use strict';

require('../../../app');

var objectToTest = 'CoreRouterConfig';

describe(objectToTest, function () {
    var rootScope,
        state,
        location;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('core'));

    beforeEach(inject(function ($rootScope, $state, $location) {
        rootScope = $rootScope;
        state = $state;
        location = $location;
    }));

    it('should respond home state', function() {
        expect(state.href('home')).toEqual('#/');
    });

    it('init path is correct', function() {
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/");
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/nonExistentPath');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/");
    });

    it('does not redirect to otherwise page without locationChangeSuccess', function() {
        location.path('/nonExistentPath');
        expect(location.path()).toBe("/nonExistentPath");
    });
});