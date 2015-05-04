//= require ./index
//= require views/purchase/table_from_models
//= require flux/purchase/store

App.Pages.EssentialsRoute = (function () {
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

    render: function () {
      var purchases = this.state.purchases.filter(function (purchase) {
        return purchase.group() === 'essential';
      });

      return (
        <div>
          <h1>Essential Clothing ({purchases.size})</h1>
          <br />
          <App.Purchase.TableFromModels purchases={purchases} />
        </div>
      );
    }
  });
})();
