//= require ../flux/store
//= require clothing_item/flux/store

App.WishListCategory.IndexRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.WishListCategory.Store, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return {
        wishListCategories: App.WishListCategory.Store.getAll()
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

    _renderCategory: function (category) {
      return (
        <div key={category.id}>
          {category.name}
          {category.clothingItemIds.map(this._renderClothingItem)}
        </div>
      );
    },

    _renderClothingItem: function (clothingItemId) {
      var clothingItem = App.ClothingItem.Store.get(clothingItemId);
      var brand = App.Brand.Store.get(clothingItem.brandId);
      return (
        <div key={clothingItemId}>
          {brand.name} {clothingItem.model}
        </div>
      );
    },

    render: function () {
      if (this.state.wishListCategories.size === 0) {
        return this._renderBlankWishList();
      }

      return (
        <div>
          <h1>Wish List ({this.state.wishListCategories.size})</h1>
          <br />
          {this.state.wishListCategories.valueSeq().map(this._renderCategory)}
        </div>
      );
    }
  });
})();
