//= require components/clothing_item_grid
//= require getters/clothing_item_getters
//= require stores/clothing_item_store

App.WardrobeRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.ClothingItemStore, 'getStateFromStore')],

    getStateFromStore: {
      clothingItemIds: App.ClothingItemGetters.GET_ALL_IDS
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
