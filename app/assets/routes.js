define([
  'bower/react', 'bower/react_router', 'routes/backbone_route',
  'routes/root_route', 'routes/wardrobe_route', 'routes/clothing_item_route',
  'routes/outfit_route', 'models/clothing_item', 'models/outfit',
  'collections/clothing_item_list', 'routes/about_route'
], function (React, Router, BackboneRoute,
             RootRoute, WardrobeRoute, ClothingItemRoute,
             OutfitRoute, ClothingItem, Outfit,
             ClothingItemList, AboutRoute) {

  'use strict';

  return Router.Routes(null,
    Router.Route({ handler: RootRoute },
      Router.DefaultRoute(wardrobeRouteAttrs()),
      Router.Route({ name: 'about', handler: AboutRoute }),
      Router.Route(clothingItemRouteAttrs()),
      Router.Route(outfitRouteAttrs())
    )
  );

  function wardrobeRouteAttrs() {
    return {
      handler: BackboneRoute,
      routeClass: WardrobeRoute,
      collectionClass: ClothingItemList
    };
  }

  function clothingItemRouteAttrs() {
    return {
      name: 'clothing_item',
      path: '/clothing_items/:id',
      handler: BackboneRoute,
      routeClass: ClothingItemRoute,
      modelClass: ClothingItem
    };
  }

  function outfitRouteAttrs() {
    return {
      name: 'outfit',
      path: '/outfits/:id',
      handler: BackboneRoute,
      routeClass: OutfitRoute,
      modelClass: Outfit
    };
  }
});
