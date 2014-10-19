define([
  'bower/react', 'bower/react_router', 'components/app',
  'components/wardrobe_manager', 'components/clothing_item_manager'
], function (React, Router, App, WardrobeManager, ClothingItemManager) {
  'use strict';

  return Router.Routes(null,
    Router.Route({ handler: App },
      Router.DefaultRoute({ handler: WardrobeManager }),
      Router.Route(clothingItemRouteAttrs())
    )
  );

  function clothingItemRouteAttrs() {
    return {
      name: 'clothing_item',
      path: '/clothing_items/:clothingItemId',
      handler: ClothingItemManager
    };
  }
});
