define([
  'objects/window', 'bower/react', 'routes'
], function (window, React, routes) {
  'use strict';

  var reactContainer = window.document.getElementById('react-container');
  React.renderComponent(routes, reactContainer);
});
