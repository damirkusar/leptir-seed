'use strict';

describe('Component: navigation', function () {

    beforeEach(angular.mock.module('App')); 
    beforeEach(angular.mock.module('navigation'));

    var http, scope, compile, element;
    beforeEach(inject(['$injector', function($injector){
        http = $injector.get('$httpBackend');
        scope = $injector.get('$rootScope');
        compile = $injector.get('$compile');
    }]));

  describe('Controller: navigation', function(){
        var controller;
        beforeEach(inject(function($componentController){
            controller = $componentController('navigation');
        }));

        it('should expose my appname', function() {
            expect(controller.AppName).toBeDefined();
            expect(controller.AppName).toBe('Modify me in Navigation');
        });

        it('topBarMenu is defined', function() {
        expect(controller.topBarMenu).toBeDefined();
        });

        it('topBarMenuItems is defined', function() {
            expect(controller.topBarMenuItems).toBeDefined();
        });

        it('localeMenu is defined', function() {
            expect(controller.localeMenu).toBeDefined();
        });

        it('localMenuItems is defined', function() {
            expect(controller.localeMenuItems).toBeDefined();
        });
    })
});