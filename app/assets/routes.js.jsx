//= require routes/root_route
//= require routes/about_route
//= require routes/wardrobe_route
//= require routes/clothing_item_route
//= require routes/outfit_route
//= require routes/list_route

(function () {
  'use strict';

  App.routes = (
    <ReactRouter.Route handler={App.RootRoute}>
      <ReactRouter.DefaultRoute name='list' handler={App.ListRoute} />
      <ReactRouter.Route name='about' handler={App.AboutRoute} />
      <ReactRouter.Route name='wardrobe' handler={App.WardrobeRoute} />
      <ReactRouter.Route {...clothingItemRouteAttrs()} />
      <ReactRouter.Route {...outfitRouteAttrs()} />
    </ReactRouter.Route>
  );

  function clothingItemRouteAttrs() {
    return {
      name: 'clothing_item',
      path: '/clothing_items/:id',
      handler: App.ClothingItemRoute
    };
  }

  function outfitRouteAttrs() {
    return {
      name: 'outfit',
      path: '/outfits/:id',
      handler: App.OutfitRoute
    };
  }
})();
