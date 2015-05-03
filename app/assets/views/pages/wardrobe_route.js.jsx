//= require ./index
////= require views/purchase/grid
//= require flux/purchase/store

App.Pages.WardrobeRoute = (function () {
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
      var ids = this.state.purchases.map(function (purchase) {
        return purchase.id;
      }).valueSeq().toJS();

      return (
        <div>
          WARDROBE MANAGER
          <App.Purchase.Grid ids={ids} />
        </div>
      );
    }
  });
})();
