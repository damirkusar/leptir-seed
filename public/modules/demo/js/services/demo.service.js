'use strict';

angular.module('demo').factory('DemoService', [function () {

    return {
        getDummyText: function(){
            return 'dummyText';
        }
    };

}]);
