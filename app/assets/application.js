require.config({
 shim: {
   'react-router': ['initializers/expose_react_hack']
 }
});

require([
  'initializers', 'objects/window', 'bower/react', 'routes'
], function (initializers, window, React, routes) {
  'use strict';

  React.renderComponent(routes, window.document.body);
});
