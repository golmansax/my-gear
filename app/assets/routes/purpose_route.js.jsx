//= require components/purpose_view
//= require stores/purpose_store

App.PurposeRoute = (function () {
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
        <div>
          <h1>{this.state.purpose.name}</h1>
          <br />
          <App.PurposeView purpose={this.state.purpose} />
        </div>
      );
    }
  });
})();
