//= require brand/flux/store
//= require clothing_item/flux/store

App.Pages.WatchListRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.ClothingItem.Store, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return {
        clothingItems: App.ClothingItem.Store.getAll()
      };
    },

    _renderBlankWatchList: function () {
      return (
        <div>
          <h1>Watch List</h1>
          <br />
          It&rsquo;s empty!  (for now...)
        </div>
      );
    },

    _renderWatchListItem: function (clothingItem) {
      var brand = App.Brand.Store.get(clothingItem.brandId);
      return <div key={clothingItem.id}>{brand.name} {clothingItem.model}</div>;
    },

    render: function () {
      var watchList = this.state.clothingItems.filter(function (clothingItem) {
        return clothingItem.purchaseIds.length === 0;
      });

      if (watchList.size === 0) {
        return this._renderBlankWatchList();
      }

      return (
        <div>
          <h1>Watch List ({watchList.size})</h1>
          <br />
          {watchList.valueSeq().map(this._renderWatchListItem)}
        </div>
      );
    }
  });
})();
