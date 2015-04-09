//= require routes/root_route
//= require routes/about_route
//= require routes/wardrobe_route
//= require routes/clothing_route
//= require routes/clothing_item_route
//= require routes/purpose_route
//= require routes/list_route
//= require routes/info_route

(function () {
  'use strict';

  App.routes = (
    <ReactRouter.Route handler={App.RootRoute}>
      <ReactRouter.DefaultRoute name='info' handler={App.InfoRoute} />

      <ReactRouter.Route name='clothing' handler={App.ClothingRoute}>
        <ReactRouter.Route name='about' handler={App.AboutRoute} />
        <ReactRouter.Route name='essentials' handler={App.ListRoute} />
        <ReactRouter.Route name='other' handler={App.ListRoute} />
        <ReactRouter.Route name='wishlist' handler={App.ListRoute} />
        <ReactRouter.Route name='wardrobe' handler={App.WardrobeRoute} />
        <ReactRouter.Route
          name='clothing_item'
          path='/clothing/items/:id'
          handler={App.ClothingItemRoute}
        />
        <ReactRouter.Route
          name='purpose'
          path='/clothing/purposes/:id'
          handler={App.PurposeRoute}
        />
      </ReactRouter.Route>
    </ReactRouter.Route>
  );
})();
