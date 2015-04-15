//= require stores/purpose_store

App.PurposeListItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.PurposeStore, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purpose: App.PurposeStore.get(props.id)
      };
    },

    render: function () {
      return (
        <span className="purpose-list-item label label-default">
          {this.state.purpose.name}
        </span>
      );
    }
  });
})();
