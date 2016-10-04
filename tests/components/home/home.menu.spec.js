'use strict';

describe('Component: home', function () {

    beforeEach(angular.mock.module('App')); 
    beforeEach(angular.mock.module('home'));

    beforeEach(inject(['$injector', function($injector){
    }]));

  describe('Controller: home', function(){
        var controller, menu, menuId;
        beforeEach(inject(function(Menus){
            menu = Menus;
            menuId = 'topBar';
        }));

        it('topBar menu is exists', function () {
            expect(menu.validateMenuExistance(menuId)).toBeTruthy();
        });

        it('getMenu returns 2 menu items', function () {
            expect(menu.getMenu(menuId).items.length).toBe(2);
        });
    })
});