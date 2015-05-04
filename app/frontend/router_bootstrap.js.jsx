//= require routes
//= require_self
/* global window */

(function (window) {
  'use strict';

  var onClient = !!window.document;

  App.RouterBootstrap = React.createClass({
    getInitialState: function () {
      return { Handler: null, params: {} };
    },
    componentWillMount: function () {
      var routePath = onClient ? ReactRouter.HistoryLocation : this.props.path;
      ReactRouter.run(App.routes, routePath, this._onRouteChange);
    },
    _onRouteChange: function (Handler, state) {
      this.setState({ Handler: Handler, params: state.params });
    },
    render: function () {
      return <this.state.Handler {...(this.state.params)} />;
    }
  });

  if (onClient) {
    // TODO put back in window.gon
    React.render(
      <App.RouterBootstrap />,
      window.document.getElementById('router-container')
    );
  }
})(window || {});
