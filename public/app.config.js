'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function () {
    // Init module configuration options
    var applicationModuleName = 'App';
    var applicationModuleVendorDependencies = ['ui.bootstrap', 'ui.router', 'ngAnimate', 'pascalprecht.translate'];

    // Add a new vertical module
    var registerModule = function (moduleName, dependencies) {
        // Create angular module
        angular.module(moduleName, dependencies || []);

        // Add the module to the AngularJS configuration file
        angular.module(applicationModuleName).requires.push(moduleName);
    };

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();

var app = angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

app.config(['$translateProvider', '$translatePartialLoaderProvider', function($translateProvider, $translatePartialLoaderProvider) {

        $translateProvider.
            useStaticFilesLoader({
                prefix: '/translations/locale-',
                suffix: '.json'
            });

        // $translateProvider.useLoader('$translatePartialLoader', {
        //     urlTemplate: '/translations/{part}/{lang}.json'
        // });

        // $translatePartialLoaderProvider.addPart('common');
        // $translatePartialLoaderProvider.addPart('home');
        // $translatePartialLoaderProvider.addPart('demo');

        $translateProvider.preferredLanguage('en_US'); 
}]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("root",
            {
                views: {
                    "": {
                        template: '<div ui-view=""></div>'
                    }
                }
            });
    }]).run(['$state', function ($state) {
         $state.transitionTo('root');
    }]);

app.run(['$rootScope', '$translate', function ($rootScope, $translate) {
  $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
    $translate.refresh();
  });
}]);

app.run(['Menus', function (Menus) {
        Menus.configMenus();

        // Parameters in addMenuItem are: menuId, menuItemId, menuItemTitle, menuItemUiState, menuItemType, position
        // menuId: is topBar and configured in Menus.configMenus();
        // menuItemId: Unique id for main item
        // menuItemTitle: Title to be shown as link
        // menuItemUiState: UI State to set the link. Can be empty.
        // If you have a dropDown and you set a link, every time you click on the drop down, page will be called
        // menuItemType: dropDown or empty
        // position: Position for ordering main menu

        // Parameters in addSubMenuItem are: menuId, rootMenuItemId, subMenuItemId, subMenuItemTitle, subMenuItemUiState, position
        // menuId: is topBar and configured in Menus.configMenus();
        // rootMenuItemId: Unique id for modules / nav menu item of the parent (menuItemId from above)
        // subMenuItemId: Unique id for sub item
        // subMenuItemTitle: Title to be shown as link
        // subMenuItemUiState: UI State to set the link.
        // position: Position for ordering dropDown menu

        Menus.addMenuItem('locales', 'localId1', 'Switch Language', 'home', 'dropDown', '1');
        Menus.addSubMenuItem('locales', 'localId1','en' ,'English', 'en_US', '0');
        Menus.addSubMenuItem('locales', 'localId1', 'de', 'Deutsch', 'de_CH', '1');
    }]);