'use strict';

require('../../../app');

var objectToTest = 'ScrollSmooth';

describe(objectToTest, function () {
    var service;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('pascalprecht.translate'));
    beforeEach(angular.mock.module('core'));

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