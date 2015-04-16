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

    _purchaseSortByDate: function (purchaseA, purchaseB) {
      var momentA = purchaseA.moment();
      var momentB = purchaseB.moment();

      if (momentA.isAfter(momentB)) {
        return -1;
      } else if (momentB.isAfter(momentA)) {
        return 1;
      } else {
        return 0;
      }
    },

    render: function () {
      var purchases = this.state.purchases.filter(function (purchase) {
        return purchase.purposeIds.reduce(function (previousValue, purposeId) {
          return previousValue || (purposeId === 'essential');
        }, false);
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
