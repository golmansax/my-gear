//= require components/clothing_item_detailed_view
//= require models/clothing_item
//= require stores/clothing_item_store

App.ClothingItemRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.ClothingItemStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function () {
      return {
        clothingItem: App.ClothingItemStore.get(this.props.id)
      };
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
