//= require views/layout/root_route
//= require views/layout/clothing_route
//= require views/pages/about_route
//= require views/pages/not_found_route
//= require views/pages/wardrobe_route
//= require views/pages/essentials_route
//= require views/pages/non_essentials_route
//= require clothing_item/views/route
//= require views/purpose/route
//= require brand/views/route
//= require views/pages/recent_route
//= require views/pages/watch_list_route
//= require views/pages/info_route

(function () {
  'use strict';

  App.routes = (
    <ReactRouter.Route handler={App.Layout.RootRoute}>
      <ReactRouter.DefaultRoute name='info' handler={App.Pages.InfoRoute} />
      <ReactRouter.NotFoundRoute handler={App.Pages.NotFoundRoute} />

      <ReactRouter.Route name='clothing' handler={App.Layout.ClothingRoute}>
        <ReactRouter.Route name='about' handler={App.Pages.AboutRoute} />
        <ReactRouter.Route
          name='essentials'
          handler={App.Pages.EssentialsRoute}
        />
        <ReactRouter.Route
          name='non-essentials'
          handler={App.Pages.NonEssentialsRoute}
        />
        <ReactRouter.Route
          name='watch-list'
          handler={App.Pages.WatchListRoute}
        />
        <ReactRouter.Route
          name='recent-purchases'
          handler={App.Pages.RecentRoute}
        />
        <ReactRouter.Route
          name='wardrobe'
          handler={App.Pages.WardrobeRoute}
        />
        <ReactRouter.Route
          name='clothing-item'
          path='/clothing/items/:id'
          handler={App.ClothingItem.Route}
        />
        <ReactRouter.Route
          name='purpose'
          path='/clothing/purposes/:id'
          handler={App.Purpose.Route}
        />
        <ReactRouter.Route
          name='brand'
          path='/clothing/brands/:id'
          handler={App.Brand.Route}
        />
      </ReactRouter.Route>
    </ReactRouter.Route>
  );
})();
