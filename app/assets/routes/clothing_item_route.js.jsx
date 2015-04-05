//= require components/clothing_item_detailed_view
//= require components/loading
//= require models/clothing_item
//= require stores/clothing_item_store

App.ClothingItemRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.ClothingItemStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        clothingItem: App.ClothingItemStore.get(props.id)
      };
    },

    render: function () {
      if (this.state.clothingItem.isLoading) {
        return <App.Loading />;
      }

      return (
        <App.ClothingItemDetailedView clothingItem={this.state.clothingItem} />
      );
    }
  });
})();
