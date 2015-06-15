'use strict';

angular.module('core').factory('Menus', ['$log', function (log) {
    var menus = {};

    return {
        validateMenuExistance: function (menuId) {
            if (menuId && menuId.length) {
                if (menus[menuId]) {
                    return true;
                } else {
                    throw new Error(menuId + ' Menu does not exists');
                }
            } else {
                throw new Error('MenuId was not provided');
            }

            return false;
        },
        getMenu: function (menuId) {
            this.validateMenuExistance(menuId);
            return menus[menuId];
        },
        addMenu: function (menuId) {
            if(!menus[menuId]){
                menus[menuId] = {
                    items: []
                };
            }
            else {
                log.info(menuId + " already exists");
            }

            return menus[menuId];
        },
        removeMenu: function (menuId) {
            this.validateMenuExistance(menuId);

            // Return the menu object
            delete menus[menuId];
        },
        // Add menu item object
        addMenuItem: function (menuId, menuItemId, menuItemTitle, menuItemUiState, menuItemType, position) {
            this.validateMenuExistance(menuId);

            // Push new menu item
            menus[menuId].items.push({
                id: menuItemId,
                title: menuItemTitle,
                uiState: menuItemUiState,
                class: menuItemType,
                position: position || 0,
                items: []
            });

            // Return the menu object
            return menus[menuId];
        },
        addSubMenuItem: function (menuId, rootMenuItemId, subMenuItemId, subMenuItemTitle, subMenuItemUiState, position) {
            this.validateMenuExistance(menuId);

            // Search for menu item
            for (var itemIndex in menus[menuId].items) {
                if (menus[menuId].items[itemIndex].id === rootMenuItemId) {
                    // Push new submenu item
                    menus[menuId].items[itemIndex].items.push({
                        id: subMenuItemId,
                        title: subMenuItemTitle,
                        uiState: subMenuItemUiState,
                        position: position || 0
                    });
                }
            }

            // Return the menu object
            return menus[menuId];
        },
        removeMenuItem: function (menuId, menuItemId) {
            this.validateMenuExistance(menuId);

            // Search for menu item to remove
            for (var itemIndex in menus[menuId].items) {
                if (menus[menuId].items[itemIndex].id === menuItemId) {
                    menus[menuId].items.splice(itemIndex, 1);
                }
            }

            // Return the menu object
            return menus[menuId];
        },
        removeSubMenuItem: function (menuId, subMenuItemId) {
            this.validateMenuExistance(menuId);

            // Search for menu item to remove
            for (var itemIndex in menus[menuId].items) {
                for (var subItemIndex in menus[menuId].items[itemIndex].items) {
                    if (menus[menuId].items[itemIndex].items[subItemIndex].id === subMenuItemId) {
                        menus[menuId].items[itemIndex].items.splice(subItemIndex, 1);
                    }
                }
            }

            // Return the menu object
            return menus[menuId];
        },
        configMenus: function(){
            this.addMenu('topBar');
            this.addMenu('locales');
        },
        resetMenus: function(){
            menus = {};
            this.configMenus();
        }
    };
}]);