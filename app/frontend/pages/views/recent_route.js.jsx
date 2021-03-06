//= require purchase/views/table_from_models
//= require purchase/flux/store

App.Pages.RecentRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Purchase.Store, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return {
        purchases: App.Purchase.Store.getAll()
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
      var purchases = this.state.purchases.sort(this._purchaseSortByDate);

      return (
        <div>
          <h1>Most Recent Purchases</h1>
          <br />
          <App.Purchase.TableFromModels purchases={purchases} />
        </div>
      );
    }
  });
})();
