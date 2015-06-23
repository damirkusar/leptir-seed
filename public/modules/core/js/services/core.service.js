'use strict';

angular.module('core').factory('CoreService', [function () {

    return {
        getDummyText: function(){
            return 'dummyText';
        }
    };

}]);