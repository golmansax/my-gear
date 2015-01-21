//= require routes
//= require_self
/* global window */

(function (window) {
  'use strict';

  var onClient = !!window.document;

  App.RouterBootstrap = React.createClass({
    getInitialState: function () {
      return { Handler: null };
    },
    componentWillMount: function () {
      var routePath = onClient ? ReactRouter.HistoryLocation : this.props.path;
      ReactRouter.run(App.routes, routePath, this._onRouteChange);
    },
    _onRouteChange: function (Handler) {
      this.setState({ Handler: Handler });
    },
    render: function () {
      return (<this.state.Handler />);
    }
  });

  if (onClient) {
    React.render(
      <App.RouterBootstrap />,
      window.document.getElementById('router-container')
    );
  }
})(window || {});
