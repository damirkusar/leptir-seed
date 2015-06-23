'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'CoreMenuConfig';

describe(objectToTest, function () {
    var menu,
        menuId = 'topBar';

    dependencies.configureDepencencies();

    beforeEach(inject(function (Menus) {
        menu = Menus;
    }));

    it('topBar menu is exists', function () {
        expect(menu.validateMenuExistance(menuId)).toBeTruthy();
    });

    it('getMenu returns 0 menu items', function () {
        expect(menu.getMenu(menuId).items.length).toBe(0);
    });
});