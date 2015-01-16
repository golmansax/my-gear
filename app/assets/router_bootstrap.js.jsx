//= require bower_components/react-router/dist/react-router
//= require routes/root_route
//= require routes/about_route
//= require fake_routes

var onClient = !!window.document;

var RouterBootstrap = React.createClass({
  render: function () {
    var MyHandler;
    var routePath = onClient ? ReactRouter.HistoryLocation : this.props.path;

    ReactRouter.run(routes, routePath, function (Handler) {
      MyHandler = Handler;
    });

    return (<MyHandler />);
  }
});
