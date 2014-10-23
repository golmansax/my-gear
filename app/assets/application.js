require.config({
 shim: {
   'bower/react_router': ['initializers/expose_react_hack']
 }
});

require([
  'initializers/expose_react_hack', 'objects/window', 'bower/react', 'routes'
], function (initializers, window, React, routes) {
  'use strict';

  var reactContainer = window.document.getElementById('react-container');
  React.renderComponent(routes, reactContainer);
});
