//= require config

require([
  'initializers', 'objects/window', 'bower/react', 'routes',
  'bower/react_router'
], function (initializers, window, React, routes, Router) {
  'use strict';

  Router.run(routes, function (Handler, state) {
    React.render(<Handler />, window.document.body);
  });
});
