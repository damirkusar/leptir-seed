'use strict';

require('../app');

var exports = module.exports = {};

exports.configureDepencencies = function() {
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('pascalprecht.translate'));
    beforeEach(angular.mock.module('core'));
};