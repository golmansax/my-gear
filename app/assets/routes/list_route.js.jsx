//= require components/clothing_item_table/clothing_item_table
//= require models/clothing_item_collection
//= require stores/clothing_item_store

App.ListRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.ClothingItemStore, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return {
        clothingItems: App.ClothingItemStore.getAll()
      };
    },

    getInitialState: function () {
      var clothingItems = new App.ClothingItemCollection([], { parse: true });

      return {
        currentSort: clothingItems.defaultSort,
        groupBy: 'usage'
      };
    },

    handleSort: function (sort) {
      if (this.state.currentSort === sort) {
        this.state.clothingItems.reverseSort();
      } else {
        this.state.clothingItems.changeSort([sort]);
        this.setState({ currentSort: sort });
      }
    },

    render: function () {
      return (
        <div>
          <h1>List of Everything ({this.state.clothingItems.size})</h1>
          <App.ClothingItemTable
            clothingItems={this.state.clothingItems}
            handleSort={this.handleSort}
            title='BLAH'
          />
        </div>
      );
    }
  });
})();
