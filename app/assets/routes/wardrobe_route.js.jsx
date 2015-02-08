//= require components/clothing_item_grid
//= require stores/clothing_item_store

App.WardrobeRoute = (function () {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      return this._getStateFromStore();
    },

    componentDidMount: function() {
      App.ClothingItemStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      App.ClothingItemStore.removeChangeListener(this._onChange);
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
