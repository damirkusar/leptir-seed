'use strict';

angular.module('demo').run(['Menus',
    function(Menus) {
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

        Menus.addMenuItem('topBar', 'demo1Id', 'Demo', 'demo', '', '0');

        Menus.addMenuItem('topBar', 'demo2Id', 'Demo DropDown', '', 'dropDown', '1');
        Menus.addSubMenuItem('topBar', 'demo2Id','sub1Id' ,'Go Home', 'home', '0');
        Menus.addSubMenuItem('topBar', 'demo2Id', 'sub2Id', 'To Demo', 'demo', '1');
    }
]);
