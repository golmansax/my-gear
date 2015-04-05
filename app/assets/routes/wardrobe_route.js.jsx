//= require components/clothing_item_grid
//= require stores/clothing_item_store

App.WardrobeRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.ClothingItemStore, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return {
        clothingItems: App.ClothingItemStore.getAll()
      };
    },

    render: function () {
      var ids = this.state.clothingItems.map(function (clothingItem) {
        return clothingItem.id;
      }).valueSeq().toJS();

      return (
        <div>
          WARDROBE MANAGER
          <App.ClothingItemGrid ids={ids} />
        </div>
      );
    }
  });
})();
