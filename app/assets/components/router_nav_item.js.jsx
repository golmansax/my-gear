define([
  'bower/react', 'bower/react_router', 'objects/prop_types'
], function (React, Router, PropTypes) {
  'use strict';

  return React.createClass({
    propTypes: {
      to: PropTypes.string.isRequired,
      params: PropTypes.object
    },
    mixins: [Router.State],
    render: function () {
      var isActive = this.isActive(
        this.props.to,
        this.getParams(),
        this.getQuery()
      );

      return (
        <li className={isActive ? 'active' : ''}>
          <Router.Link {...this.props} />
        </li>
      );
    }
  });
});
