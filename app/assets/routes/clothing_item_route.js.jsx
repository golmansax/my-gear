//= require components/clothing_item_detailed_view
//= require models/clothing_item

App.ClothingItemRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [ReactRouter.State],

    _getStateFromStore: function (id) {
      return { clothingItem: App.ClothingItemStore.getOne(id) };
    },

    getInitialState: function () {
      return this._getStateFromStore(this.getParams().id);
    },

    componentDidMount: function() {
      App.ClothingItemStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      App.ClothingItemStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState(this._getStateFromStore(this.getParams().id));
    },

    // ACCOUNT FROM getParams() switch

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
