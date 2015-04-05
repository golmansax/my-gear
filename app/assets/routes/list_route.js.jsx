//= require components/purchase_table/purchase_table
//= require stores/purchase_store

App.ListRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.PurchaseStore, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return {
        purchases: App.PurchaseStore.getAll()
      };
    },

    render: function () {
      return (
        <div>
          <h1>List of Everything ({this.state.purchases.size})</h1>
          <br />
          <App.PurchaseTable purchases={this.state.purchases} />
        </div>
      );
    }
  });
})();
