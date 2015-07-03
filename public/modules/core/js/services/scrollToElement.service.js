'use strict';

var scrollSmoothToElementId;
var scrollSmoothToTop;

jQuery(document).ready(function () { // jshint ignore:line
    scrollSmoothToElementId = function(elementId){
        if($("#" + elementId).length){ // jshint ignore:line
            jQuery('html, body').animate({ // jshint ignore:line
                scrollTop: jQuery("#" + elementId).offset().top // jshint ignore:line
            }, 500);
        }

        return false;
    };

    scrollSmoothToTop = function(){
        jQuery('html, body').animate({ // jshint ignore:line
             scrollTop: jQuery('body').scrollTop(0) // jshint ignore:line
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
