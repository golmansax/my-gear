//= require components/clothing_item_grid
//= require stores/clothing_item_store

App.WardrobeRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.ClothingItemStore, 'getStateFromStore')],

    getStateFromStore: function () {
      return {
        clothingItemIds: App.ClothingItemStore.getAll({ pluck: 'id' })
      };
    },

    render: function () {
      return (
        <div>
          WARDROBE MANAGER
          <App.ClothingItemGrid ids={this.state.clothingItemIds} />
        </div>
      );
    }
  });
})();
