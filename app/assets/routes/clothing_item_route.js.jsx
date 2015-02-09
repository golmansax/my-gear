//= require components/clothing_item_detailed_view
//= require getters/clothing_item_getters
//= require models/clothing_item
//= require mixins/store_state_mixin
//= require stores/clothing_item_store

App.ClothingItemRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreStateMixin],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    stateFromStore: {
      clothingItem: App.ClothingItemGetters.FIND_BY_ID
    },

    render: function () {
      var clothingItem = this.state.clothingItem;

      // TODO check validation
      if (new App.ClothingItem(clothingItem).isValid()) {
        return <App.ClothingItemDetailedView {...clothingItem} />;
      } else {
        return <div>Loading...</div>;
      }
    }
  });
})();
