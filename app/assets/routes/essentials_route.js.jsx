//= require components/purchase_table/purchase_table
//= require stores/purchase_store

App.EssentialsRoute = (function () {
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
      var purchases = this.state.purchases.filter(function (purchase) {
        return purchase.group() === 'essential';
      });

      return (
        <div>
          <h1>Essential Clothing ({purchases.size})</h1>
          <br />
          <App.PurchaseTable purchases={purchases} />
        </div>
      );
    }
  });
})();
