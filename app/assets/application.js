require.config({
 shim: {
   'react-router': ['initializers/expose_react_hack']
 }
});

require([
  'initializers', 'objects/window', 'bower/react', 'routes'
], function (initializers, window, React, routes) {
  'use strict';

  var reactContainer = window.document.getElementById('react-container');
  React.renderComponent(routes, reactContainer);
});
