'use strict';

angular.module('footer').controller('FooterController', controller);
controller.$inject = [];

function controller() {
    var vm = this;

    vm.title = "Modify me in Footer";
}

angular.module('footer').component('footer',
{
    bindings: {},
    templateUrl: 'components/footer/footer.html',
    controller: controller
});