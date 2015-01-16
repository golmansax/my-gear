//= require fake_routes
//= require_self

(function () {
  'use strict';

  var onClient = !!window.document;

  App.RouterBootstrap = React.createClass({
    render: function () {
      var MyHandler;
      var routePath = onClient ? ReactRouter.HistoryLocation : this.props.path;

      ReactRouter.run(App.routes, routePath, function (Handler, state) {
        MyHandler = Handler;
      });

      return (<MyHandler />);
    }
  });

  if (onClient) {
    React.render(
      <App.RouterBootstrap />,
      window.document.getElementById('router-container')
    );
  }
})();
