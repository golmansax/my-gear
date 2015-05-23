//= require pages/layouts/clothing_route
//= require pages/views/about_route
//= require pages/views/not_found_route
//= require pages/views/wardrobe_route
//= require pages/views/essentials_route
//= require pages/views/non_essentials_route
//= require clothing_item/views/route
//= require purpose/views/route
//= require brand/views/route
//= require pages/views/recent_route
//= require pages/views/watch_list_route
//= require pages/views/info_route

(function () {
  'use strict';

  App.routes = (
    <ReactRouter.Route>
      <ReactRouter.Redirect from='/' to='clothing' />
      <ReactRouter.NotFoundRoute handler={App.Pages.NotFoundRoute} />

      <ReactRouter.Route name='clothing' handler={App.Pages.ClothingRoute}>
        <ReactRouter.DefaultRoute name='info' handler={App.Pages.InfoRoute} />
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
