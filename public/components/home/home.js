"use strict";

angular.module('home').controller('CoreController', controller);
controller.$inject = [];

function controller() {
    var vm = this;

    vm.title = 'Modify me in Home';
}

angular.module('home').component('home',
{
    bindings: {},
    templateUrl: 'components/home/home.html',
    controller: controller
});