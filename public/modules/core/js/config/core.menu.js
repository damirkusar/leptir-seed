'use strict';

angular.module('core')
    .run(['Menus', function (Menus) {
        Menus.configMenus();

        Menus.addMenuItem('locales', 'localId1', 'Switch Language', '', 'dropDown', '1');
        Menus.addSubMenuItem('locales', 'localId1','en' ,'English', 'en_US', '0');
        Menus.addSubMenuItem('locales', 'localId1', 'de', 'Deutsch', 'de_CH', '1');
    }]);