'use strict';

angular.module('demo').controller('DemoController', controller);
controller.$inject = [];

function controller() {
    var vm = this;

    vm.title = "Modify me in Demo";
}

angular.module('demo').component('demo',
{
    bindings: {},
    templateUrl: 'components/demo/demo.html',
    controller: controller
});