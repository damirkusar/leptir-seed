'use strict';

require('../../../app');

var objectToTest = 'DemoService';

describe(objectToTest, function () {
    var service;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('core'));
    beforeEach(angular.mock.module('demo'));

    beforeEach(inject(function (DemoService) {
        service = DemoService;
    }));

    it('can get an instance of my factory', function() {
        expect(service).toBeDefined();
    });

    it('can get a correct value from getDummyText', function() {
        expect(service.getDummyText()).toBe('dummyText');
    });
});