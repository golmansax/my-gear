define([
  'bower/react', 'bower/react_router'
], function (React, Router) {
  'use strict';

  return React.createClass({
    render: function () {
      return React.DOM.div(null,
        'I AM THE APP: ',
        Router.Link({ to: '/' }, 'HOME'),
        this.props.activeRouteHandler()
      );
    }
  });
});
