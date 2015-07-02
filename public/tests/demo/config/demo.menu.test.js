'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'DemoMenuConfig';

describe(objectToTest, function () {
    var menu,
        menuId = 'topBar';

    dependencies.configureDepencencies();

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
