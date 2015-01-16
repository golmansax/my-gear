//= require routes/root_route
//= require routes/about_route

App.routes = (
  <ReactRouter.Route handler={App.RootRoute}>
    <ReactRouter.Route name='about' handler={App.AboutRoute} />
  </ReactRouter.Route>
);
