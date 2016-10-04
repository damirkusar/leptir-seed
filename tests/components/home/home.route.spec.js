'use strict';

describe('Component: home', function () {

    beforeEach(angular.mock.module('App')); 
    beforeEach(angular.mock.module('home'));

    var scope, state, location;
    beforeEach(inject(['$injector', function($injector){
        scope = $injector.get('$rootScope');
        state = $injector.get('$state');
        location = $injector.get('$location');
    }]));

  describe('Controller: home', function(){
        var controller;
        beforeEach(inject(function($componentController){
            controller = $componentController('home');
        }));

        it('should respond home state', function() {
            expect(state.href('home')).toEqual('#/');
        });

        it('init path is correct', function() {
            scope.$emit("$locationChangeSuccess");
            expect(location.path()).toBe("/");
        });

        it('redirects to otherwise page after locationChangeSuccess', function() {
            location.path('/nonExistentPath');
            scope.$emit("$locationChangeSuccess");
            expect(location.path()).toBe("/");
        });

        it('does not redirect to otherwise page without locationChangeSuccess', function() {
            location.path('/nonExistentPath');
            expect(location.path()).toBe("/nonExistentPath");
        });
    })
});