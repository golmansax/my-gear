define([
  'bower/react'
], function (React, BackboneMixin) {
  'use strict';

  return React.createClass({
    render: function () {
      return React.DOM.div(null,
        'I AM THE APP',
        this.props.activeRouteHandler()
      );
    }
  });
});
