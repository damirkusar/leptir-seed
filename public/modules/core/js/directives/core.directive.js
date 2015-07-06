'use strict';

angular.module('core').directive('coreDirective', [function () {

  return {
    restrict: 'AE', // A: Attribute, E: Element
    template: '<div><span>Directive in: core, with name: coreDirective</span></div>'
  };

}]);
