var scrollSmoothToElementId;
jQuery(document).ready(function () {
    scrollSmoothToElementId = function(elementId){
        jQuery('html, body').animate({
            scrollTop: jQuery("#" + elementId).offset().top
        }, 500);
        return false;
    };
});

angular.module('AppName').factory('ScrollSmooth',function() {
    return {
        toElementId: function (elementId) {
            scrollSmoothToElementId(elementId);
        }
    };
});
