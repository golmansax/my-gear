//= require components/clothing_item_grid
//= require stores/clothing_item_store
//= require mixins/store_watch_mixin

App.WardrobeRoute = (function () {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      return this._getStateFromStore();
    },

    _onChange: function () {
      this.setState(this._getStateFromStore());
    },

    _getStateFromStore: function () {
      return { clothingItemIds: App.ClothingItemStore.getAll({ pluck: 'id' }) };
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
