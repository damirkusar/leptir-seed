'use strict';

var scrollSmoothToElementId;
var scrollSmoothToTop;

jQuery(document).ready(function () {
    scrollSmoothToElementId = function(elementId){
        if($("#" + elementId).length){
            jQuery('html, body').animate({
                scrollTop: jQuery("#" + elementId).offset().top
            }, 500);
        }

        return false;
    };

    scrollSmoothToTop = function(){
        jQuery('html, body').animate({
             scrollTop: jQuery('body').scrollTop(0)
        }, 500);

        return false;
    };
});

angular.module('core').factory('ScrollSmooth', [function() {
    return {
        toElementId: function (elementId) {
            scrollSmoothToElementId(elementId);
        },
        toTop: function () {
            scrollSmoothToTop();
        }
    };
}]);
