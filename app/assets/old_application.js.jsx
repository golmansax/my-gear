//= require config

require([
  'initializers/index', 'objects/window', 'bower/react', 'routes',
  'bower/react_router'
], function (initializers, window, React, routes, Router) {
  'use strict';

  /*
  Router.run(routes, function (Handler) {
    React.render(<Handler />, window.document.body);
  });
  */
});
