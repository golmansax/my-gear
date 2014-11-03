define(['bower/react', 'bower/react_router'], function (React, Router) {
  'use strict';

  return React.createClass({
    mixins: [Router.ActiveState],
    render: function () {
      var isActive = this.isActive(
        this.props.to,
        this.props.params,
        this.props.query
      );

      return React.DOM.li({ className: isActive ? 'active' : '' },
        Router.Link(this.props)
      );
    }
  });
});
