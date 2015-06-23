'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'CoreRouterConfig';

describe(objectToTest, function () {
    var rootScope,
        state,
        location;

    dependencies.configureDepencencies();

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