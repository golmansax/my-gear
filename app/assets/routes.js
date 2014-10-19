define([
  'bower/react', 'bower/react_router', 'components/app',
  'controllers/wardrobe_ctrl', 'controllers/clothing_item_view_ctrl'
], function (React, Router, App, WardrobeCtrl, ClothingItemViewCtrl) {
  'use strict';

  return Router.Routes(null,
    Router.Route({ handler: App },
      Router.DefaultRoute({ handler: WardrobeCtrl }),
      Router.Route(clothingItemRouteAttrs())
    )
  );

  function clothingItemRouteAttrs() {
    return {
      name: 'clothing_item',
      path: '/clothing_items/:clothingItemId',
      handler: ClothingItemViewCtrl
    };
  }
});
