define([
  'bower/react', 'bower/react_router', 'routes/root_route',
  'routes/wardrobe_backbone_route', 'routes/clothing_item_backbone_route',
  'routes/outfit_backbone_route', 'routes/about_route'
], function (React, Router, RootRoute,
             WardrobeBackboneRoute, ClothingItemBackboneRoute,
             OutfitBackboneRoute, AboutRoute) {

  'use strict';

  return (
    <Router.Route handler={RootRoute}>
      <Router.DefaultRoute handler={WardrobeBackboneRoute} />
      <Router.Route name='about' handler={AboutRoute} />
      <Router.Route {...clothingItemRouteAttrs()} />
      <Router.Route {...outfitRouteAttrs()} />
    </Router.Route>
  );

  function clothingItemRouteAttrs() {
    return {
      name: 'clothing_item',
      path: '/clothing_items/:id',
      handler: ClothingItemBackboneRoute
    };
  }

  function outfitRouteAttrs() {
    return {
      name: 'outfit',
      path: '/outfits/:id',
      handler: OutfitBackboneRoute
    };
  }
});