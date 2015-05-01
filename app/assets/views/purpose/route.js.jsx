//= require ./label
//= require components/purchase/grid
//= require stores/purpose_store

App.Purpose.Route = (function () {
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
          <h1>
            <App.Purpose.Label id={this.state.purpose.id} />
          </h1>
          <br />
          <App.Purchase.Grid ids={this.state.purpose.purchaseIds} />
        </div>
      );
    }
  });
})();
