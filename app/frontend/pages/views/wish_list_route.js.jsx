//= require brand/flux/store
//= require clothing_item/flux/store

App.Pages.WishListRoute = (function () {
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

    _renderBlankWishList: function () {
      return (
        <div>
          <h1>Wish List</h1>
          <br />
          It&rsquo;s empty!  (for now...)
        </div>
      );
    },

    _renderWishListItem: function (clothingItem) {
      var brand = App.Brand.Store.get(clothingItem.brandId);
      return <div key={clothingItem.id}>{brand.name} {clothingItem.model}</div>;
    },

    render: function () {
      var wishList = this.state.clothingItems.filter(function (clothingItem) {
        return clothingItem.purchaseIds.length === 0;
      });

      if (wishList.size === 0) {
        return this._renderBlankWishList();
      }

      return (
        <div>
          <h1>Wish List ({wishList.size})</h1>
          <br />
          {wishList.valueSeq().map(this._renderWishListItem)}
        </div>
      );
    }
  });
})();
