//= require ./label
//= require views/purchase/table
//= require flux/purpose/store
//= require flux/purchase/store

App.Purpose.Route = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Purpose.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purpose: App.Purpose.Store.get(props.id)
      };
    },

    render: function () {
      var purchases = Immutable.List(
        this.state.purpose.purchaseIds.map(function (purchaseId) {
          return App.Purchase.Store.get(purchaseId);
        })
      );

      return (
        <div>
          <h1>
            <App.Purpose.Label id={this.state.purpose.id} />
          </h1>
          <br />
          <App.Purchase.Table purchases={purchases} />
        </div>
      );
    }
  });
})();
