'use strict';


describe('Component: home', function () {

    beforeEach(angular.mock.module('App'));
    beforeEach(angular.mock.module('ui.bootstrap'));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('ngAnimate'));
    beforeEach(angular.mock.module('pascalprecht.translate'));

    beforeEach(angular.mock.module('home'));
    beforeEach(angular.mock.module("app.html"));  
 
    var http, scope, compile, templateCache, element;
    beforeEach(inject(['$injector', function($injector){
        http = $injector.get('$httpBackend');
        scope = $injector.get('$rootScope');
        compile = $injector.get('$compile');
        templateCache = $injector.get('$templateCache');

        http.when('GET','/translations/locale-en_US.json').respond(200);
        http.expectGET('/translations/locale-en_US.json');
        
        http.when('GET','components/home/home.html').respond(200);
        http.expectGET('components/home/home.html');

        // not working
        // var file = templateCache.get('/components/home/home.html');
        // console.log(file);
        // element = compile(angular.element(file))(scope);
        element = compile('<home></home>')(scope);
        // element = getCompiledElement('<home></home>');
        // element = compile('<div><h7>Modify me in Home</h7></div>')(scope);
        scope.$apply();
    }]));

    function getCompiledElement(template){
      var element = angular.element(template);
      var compiledElement = compile(element)(scope);
      scope.$apply();
      return compiledElement.html();
    }
 
    it('should render the h1 title', function() {
        expect(element).toContain('<div><span>Directive in: demo, with name: demoDirective</span></div>');
        // var h1 = element.find('h7');
        // console.log(element);
        // expect(h1.text()).toBe('Modify me in Home');
    });

    it('should render the h1 title', function() {
        console.log(element);
        expect(element.find('h7').html()).toBe('Modify me in Home');
    }); 
});