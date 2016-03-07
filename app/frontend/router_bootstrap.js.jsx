//= require routes
//= require_self
/* global window */

(function (window) {
  'use strict';

  var onClient = !!window.document;

  if (onClient) {
    // TODO put back in window.gon
    ReactDOM.render(
      <ReactRouter.Router history={window.History.createHistory()}>
        {App.routes}
      </ReactRouter.Router>,
      window.document.getElementById('router-container')
    );
  }
})(window || {});
