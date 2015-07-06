'use strict';

angular.module('demo').directive('demoDirective', [function () {

  return {
    restrict: 'AE', // A: Attribute, E: Element
    template: '<div><span>Directive in: demo, with name: demoDirective</span></div>'
  };

}]);
