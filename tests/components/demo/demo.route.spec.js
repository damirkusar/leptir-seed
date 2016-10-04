'use strict';

describe('Component: demo', function () {

    beforeEach(angular.mock.module('App')); 
    beforeEach(angular.mock.module('demo'));

    var scope, state, location;
    beforeEach(inject(['$injector', function($injector){
        scope = $injector.get('$rootScope');
        state = $injector.get('$state');
        location = $injector.get('$location');
    }]));

  describe('Controller: demo', function(){
        var controller;
        beforeEach(inject(function($componentController){
            controller = $componentController('demo');
        }));

        it('should respond demo state', function() {
            expect(state.href('demo')).toEqual('#/demo');
        });
    })
});