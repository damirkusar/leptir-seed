'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'ScrollSmooth';

describe(objectToTest, function () {
    var service;

    dependencies.configureDepencencies();

    beforeEach(inject(function (ScrollSmooth) {
        service = ScrollSmooth;
    }));

    it('can get an instance of my factory', function() {
        expect(service).toBeDefined();
    });

    it('toElementId is falsy because no html loaded', function() {
        expect(service.toElementId('body')).toBeFalsy();
    });

    it('toTop is falsy because no html loaded', function() {
        expect(service.toTop()).toBeFalsy();
    });
});