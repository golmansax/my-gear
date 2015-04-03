//= require components/clothing_item_grid
//= require stores/clothing_item_store
//= require actions/clothing_item_actions

App.WardrobeRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.ClothingItemStore, 'getStateFromStore')],

    getStateFromStore: function () {
      return {
        clothingItems: App.ClothingItemStore.getAll()
      };
    },

    componentWillMount: function () {
      App.ClothingItemActions.fetchAll();
      this.setState(this.getStateFromStore());
    },

    render: function () {
      if (this.state.clothingItems.isLoading) {
        return <div>Loading...</div>;
      }

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
