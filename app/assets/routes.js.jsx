//= require layout/root_route
//= require routes/about_route
//= require routes/not_found_route
//= require routes/wardrobe_route
//= require routes/essentials_route
//= require routes/non_essentials_route
//= require routes/clothing_route
//= require routes/clothing_item_route
//= require views/purpose/route
//= require routes/recent_route
//= require routes/watch_list_route
//= require routes/info_route

(function () {
  'use strict';

  App.routes = (
    <ReactRouter.Route handler={App.Layout.RootRoute}>
      <ReactRouter.DefaultRoute name='info' handler={App.InfoRoute} />
      <ReactRouter.NotFoundRoute handler={App.NotFoundRoute} />

      <ReactRouter.Route name='clothing' handler={App.ClothingRoute}>
        <ReactRouter.Route name='about' handler={App.AboutRoute} />
        <ReactRouter.Route name='essentials' handler={App.EssentialsRoute} />
        <ReactRouter.Route
          name='non-essentials'
          handler={App.NonEssentialsRoute}
        />
        <ReactRouter.Route name='watch-list' handler={App.WatchListRoute} />
        <ReactRouter.Route name='recent-purchases' handler={App.RecentRoute} />
        <ReactRouter.Route name='wardrobe' handler={App.WardrobeRoute} />
        <ReactRouter.Route
          name='clothing-item'
          path='/clothing/items/:id'
          handler={App.ClothingItemRoute}
        />
        <ReactRouter.Route
          name='purpose'
          path='/clothing/purposes/:id'
          handler={App.Purpose.Route}
        />
      </ReactRouter.Route>
    </ReactRouter.Route>
  );
})();
