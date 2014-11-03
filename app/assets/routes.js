define([
  'bower/react', 'bower/react_router', 'controllers/app_ctrl',
  'controllers/wardrobe_ctrl', 'controllers/clothing_item_view_ctrl',
  'controllers/outfit_view_ctrl'
], function (React, Router, AppCtrl, WardrobeCtrl, ClothingItemViewCtrl,
             OutfitViewCtrl) {

  'use strict';

  return Router.Routes(null,
    Router.Route({ handler: AppCtrl },
      Router.DefaultRoute({ handler: WardrobeCtrl }),
      Router.Route(clothingItemRouteAttrs()),
      Router.Route(outfitRouteAttrs())
    )
  );

  function clothingItemRouteAttrs() {
    return {
      name: 'clothing_item',
      path: '/clothing_items/:id',
      handler: ClothingItemViewCtrl
    };
  }

  function outfitRouteAttrs() {
    return {
      name: 'outfit',
      path: '/outfits/:id',
      handler: OutfitViewCtrl
    };
  }
});
