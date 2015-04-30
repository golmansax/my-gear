//= require components/purchase/table
//= require stores/purchase_store

App.NonEssentialsRoute = (function () {
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
      var groupedPurchases = this.state.purchases.groupBy(function (purchase) {
        return purchase.group();
      });

      var specializedPurchases = groupedPurchases.get('specialized');
      var backupPurchases = groupedPurchases.get('backup');
      var notInUsePurchases = groupedPurchases.get('not-in-use');

      return (
        <div>
          <h1>Specialized Clothing ({specializedPurchases.size})</h1>
          <br />
          <App.Purchase.Table purchases={specializedPurchases} />
          <br />
          <h1>Backup Clothing ({backupPurchases.size})</h1>
          <br />
          <App.Purchase.Table purchases={backupPurchases} />
          <br />
          <h1>Not in Use Anymore ({notInUsePurchases.size})</h1>
          <br />
          <App.Purchase.Table purchases={notInUsePurchases} />
        </div>
      );
    }
  });
})();
