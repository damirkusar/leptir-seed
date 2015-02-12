angular.module('AppName').factory('Navigation',function() {
    return {
        toElementId: function (elementId) {
            scrollSmoothToElementId(elementId);
        }
    };
});