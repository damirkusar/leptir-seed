'use strict';

angular.module('navigation').controller('NavController', controller);
controller.$inject = ['Menus', '$translate'];

function controller(Menus, $translate) {
    var vm = this;

    vm.AppName = "Modify me in Navigation";

    vm.localeMenu = Menus.getMenu('locales');
    vm.localeMenuItems = vm.localeMenu.items;

    vm.topBarMenu = Menus.getMenu('topBar');
    vm.topBarMenuItems = vm.topBarMenu.items;

    vm.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}

angular.module('navigation').component('navigation',
{
    bindings: {},
    templateUrl: 'components/navigation/navigation.html',
    controller: controller
});