define([
  'bower/react', 'bower/react_router', 'controllers/backbone_ctrl',
  'controllers/app_ctrl', 'controllers/wardrobe_ctrl',
  'controllers/clothing_item_view_ctrl', 'controllers/outfit_view_ctrl',
  'models/clothing_item', 'models/outfit', 'collections/clothing_item_list'
], function (React, Router, BackboneCtrl,
             AppCtrl, WardrobeCtrl,
             ClothingItemViewCtrl, OutfitViewCtrl,
             ClothingItem, Outfit, ClothingItemList) {

  'use strict';

  return Router.Routes(null,
    Router.Route({ handler: AppCtrl },
      Router.DefaultRoute(wardrobeRouteAttrs()),
      Router.Route(clothingItemRouteAttrs()),
      Router.Route(outfitRouteAttrs())
    )
  );

  function wardrobeRouteAttrs() {
    return {
      handler: BackboneCtrl,
      ctrlClass: WardrobeCtrl,
      collectionClass: ClothingItemList
    };
  }

  function clothingItemRouteAttrs() {
    return {
      name: 'clothing_item',
      path: '/clothing_items/:id',
      handler: BackboneCtrl,
      ctrlClass: ClothingItemViewCtrl,
      modelClass: ClothingItem
    };
  }

  function outfitRouteAttrs() {
    return {
      name: 'outfit',
      path: '/outfits/:id',
      handler: BackboneCtrl,
      ctrlClass: OutfitViewCtrl,
      modelClass: Outfit
    };
  }
});
