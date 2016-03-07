//= require pages/views/layout
//= require pages/views/about_route
//= require pages/views/not_found_route
//= require pages/views/wardrobe_route
//= require pages/views/essentials_route
//= require pages/views/non_essentials_route
//= require clothing_item/views/route
//= require purpose/views/route
//= require brand/views/route
//= require pages/views/recent_route
//= require pages/views/info_route
//= require wish_list_category/views/index_route

(function () {
  'use strict';

  App.routes = (
    <ReactRouter.Route path='/' component={App.Pages.Layout}>
      <ReactRouter.IndexRoute component={App.Pages.InfoRoute} />
      <ReactRouter.Route path='about' component={App.Pages.AboutRoute} />
      <ReactRouter.Route
        path='essentials'
        component={App.Pages.EssentialsRoute}
      />
      <ReactRouter.Route
        path='non-essentials'
        component={App.Pages.NonEssentialsRoute}
      />
      <ReactRouter.Route
        path='wish-list'
        component={App.WishListCategory.IndexRoute}
      />
      <ReactRouter.Route
        path='recent-purchases'
        component={App.Pages.RecentRoute}
      />
      <ReactRouter.Route
        path='wardrobe'
        component={App.Pages.WardrobeRoute}
      />
      <ReactRouter.Route
        path='/clothing/:id'
        component={App.ClothingItem.Route}
      />
      <ReactRouter.Route
        path='/purposes/:id'
        component={App.Purpose.Route}
      />
      <ReactRouter.Route
        path='/brands/:id'
        component={App.Brand.Route}
      />
      <ReactRouter.Route path='*' component={App.Pages.NotFoundRoute} />
    </ReactRouter.Route>
  );
})();
