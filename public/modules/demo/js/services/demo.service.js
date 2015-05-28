'use strict';

angular.module('demo').factory('DemoService', [function () {
var name;
    return function () {
        name = 'Damir';
    };

}]);