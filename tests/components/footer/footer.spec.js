'use strict';

describe('Component: footer', function () {

    beforeEach(angular.mock.module('App')); 
    beforeEach(angular.mock.module('footer'));

    var http, scope, compile, element;
    beforeEach(inject(['$injector', function($injector){
        http = $injector.get('$httpBackend');
        scope = $injector.get('$rootScope');
        compile = $injector.get('$compile');
    }]));

  describe('Controller: footer', function(){
        var controller;
        beforeEach(inject(function($componentController){
            controller = $componentController('footer');
        }));

        it('should expose my title', function() {
            expect(controller.title).toBeDefined();
            expect(controller.title).toBe('Modify me in Footer');
        });
    })
});