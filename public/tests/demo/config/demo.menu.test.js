'use strict';

require('../../../app');

var objectToTest = 'DemoMenuConfig';

describe(objectToTest, function () {
    var menu,
        menuId = 'topBar';

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('core'));
    beforeEach(angular.mock.module('demo'));

    beforeEach(inject(function (Menus) {
        menu = Menus;
    }));

    it('getMenu returns 2 menu items', function () {
        expect(menu.getMenu(menuId).items.length).toBe(2);
    });

    it('getMenu returns 2 sub menu items', function () {
        expect(menu.getMenu(menuId).items[0].items.length).toBe(0);
        expect(menu.getMenu(menuId).items[1].items.length).toBe(2);
    });
});