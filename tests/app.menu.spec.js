'use strict';

describe('Component: app', function () {

    beforeEach(angular.mock.module('App')); 

    beforeEach(inject(['$injector', function($injector){
    }]));

  describe('Controller: app', function(){
        var controller, menu, menuId;
        beforeEach(inject(function(Menus){
            menu = Menus;
            menuId = 'locales';
        }));

        it('locales menu is exists', function () {
            expect(menu.validateMenuExistance(menuId)).toBeTruthy();
        });

        it('getMenu returns 2 menu items', function () {
            expect(menu.getMenu(menuId).items.length).toBe(1);
        });
    })
});