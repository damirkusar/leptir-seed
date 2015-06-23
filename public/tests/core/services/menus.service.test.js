'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'Menus';

describe(objectToTest, function () {
    var service, testMenu;

    dependencies.configureDepencencies();

    beforeEach(inject(function (Menus) {
        service = Menus;
        testMenu = 'testMenu'
        service.addMenu(testMenu);
    }));

    it('can get an instance of my factory', function () {
        expect(service).toBeDefined();
    });

    it('validateMenuExistance returns true', function () {
        expect(service.validateMenuExistance(testMenu)).toBeTruthy();
    });

    it('getMenu returns 0 objects', function () {
        expect(service.getMenu(testMenu).items.length).toBe(0);
    });

    it('removeMenu removes menu', function () {
        expect(service.removeMenu(testMenu)).toBeUndefined();
    });

    it('addMenuItem adds a new item', function () {
        service.addMenuItem(testMenu, 'testId', 'Test', 'test', '', '0');
        expect(service.getMenu(testMenu).items.length).toBe(1);
        expect(service.getMenu(testMenu).items[0].items.length).toBe(0);
    });

    it('addSubMenuItem adds a new subItem', function () {
        service.addMenuItem(testMenu, 'testId', 'Test', 'test', '', '0');
        service.addSubMenuItem(testMenu, 'testId','subTestId' ,'SubTest', 'subTest', '0');
        expect(service.getMenu(testMenu).items.length).toBe(1);
        expect(service.getMenu(testMenu).items[0].items.length).toBe(1);
    });

    it('removeMenuItem removes an item', function () {
        service.addMenuItem(testMenu, 'testId', 'Test', 'test', '', '0');
        expect(service.getMenu(testMenu).items.length).toBe(1);

        service.removeMenuItem(testMenu, 'testId');
        expect(service.getMenu(testMenu).items.length).toBe(0);
    });

    it('addSubMenuItem adds a new subItem', function () {
        service.addMenuItem(testMenu, 'testId', 'Test', 'test', '', '0');
        service.addSubMenuItem(testMenu, 'testId','subTestId' ,'SubTest', 'subTest', '0');
        expect(service.getMenu(testMenu).items.length).toBe(1);
        expect(service.getMenu(testMenu).items[0].items.length).toBe(1);

        service.removeSubMenuItem(testMenu, 'subTestId');
        expect(service.getMenu(testMenu).items.length).toBe(1);
        expect(service.getMenu(testMenu).items[0].items.length).toBe(0);
    });

    it('configMenus adds new topBar menu', function () {
        service.configMenus();
        expect(service.getMenu('topBar')).toBeDefined();
    });

    it('resetMenus resets to blank menus', function () {
        expect(service.validateMenuExistance(testMenu)).toBeTruthy();
        service.addMenuItem(testMenu, 'testId', 'Test', 'test', '', '0');
        service.addSubMenuItem(testMenu, 'testId','subTestId' ,'SubTest', 'subTest', '0');
        expect(service.getMenu(testMenu).items.length).toBe(1);
        expect(service.getMenu(testMenu).items[0].items.length).toBe(1);

        service.resetMenus();

        expect(function() {
            service.validateMenuExistance(testMenu);
        }).toThrow(new Error('testMenu Menu does not exists'));
    });
});