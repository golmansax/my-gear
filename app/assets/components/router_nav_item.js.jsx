define([
  'bower/react', 'bower/react_router', 'objects/prop_types'
], function (React, Router, PropTypes) {
  'use strict';

  return React.createClass({
    propTypes: {
      to: PropTypes.string.isRequired,
      params: PropTypes.object
    },
    mixins: [Router.ActiveState],
    render: function () {
      var isActive = this.isActive(
        this.props.to,
        this.props.params,
        this.props.query
      );

      return (
        /* jshint maxlen: false, quotmark: false */
        <li className={isActive ? 'active' : ''}>
          <Router.Link {...this.props} />
        </li>
        /* jshint maxlen: 80, quotmark: single */
      );
    }
  });
});
