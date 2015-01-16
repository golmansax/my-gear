//= require bower_components/react/react
//= require bower_components/react-router/dist/react-router
//= require routes/root_route
//= require routes/about_route
//= require fake_routes

ReactRouter.run(routes, function (Handler) {
  if (window.document) {
    React.render(<Handler />, window.document.body);
  } else {
    window.Handler = Handler;
  }
});
