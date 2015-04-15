App.RouterNavItem = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      to: PropTypes.string.isRequired,
      params: PropTypes.object
    },

    mixins: [ReactRouter.State],

    render: function () {
      var isActive = this.isActive(
        this.props.to,
        this.getParams(),
        this.getQuery()
      );

      return (
        <li className={isActive ? 'active' : ''}>
          <ReactRouter.Link {...this.props} />
        </li>
      );
    }
  });
})();
