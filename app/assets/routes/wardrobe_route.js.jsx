//= require components/clothing_item_grid
//= require getters/clothing_item_getters
//= require mixins/store_state_mixin

App.WardrobeRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreStateMixin],

    stateFromStores: {
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
