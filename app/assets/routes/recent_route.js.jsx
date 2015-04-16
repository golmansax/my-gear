//= require components/purchase_table/purchase_table
//= require stores/purchase_store

App.RecentRoute = (function () {
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
      var purchases = this.state.purchases.sort(function (purchaseA, purchaseB) {
        var momentA = purchaseA.moment();
        var momentB = purchaseB.moment();

        if (momentA.isAfter(momentB)) {
          return -1;
        } else if (momentB.isAfter(momentA)) {
          return 1;
        } else {
          return 0;
        }
      });

      return (
        <div>
          <h1>Most Recent Purchases</h1>
          <br />
          <App.PurchaseTable purchases={purchases} />
        </div>
      );
    }
  });
})();
