'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'DemoRouterConfig';

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

    it('should respond demo state', function() {
        expect(state.href('demo')).toEqual('#/demo');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/demo');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/demo");
    });
});
