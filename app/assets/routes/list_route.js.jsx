//= require components/clothing_item_table_group
//= require collections/clothing_item_collection
//= require stores/clothing_item_store

App.ListRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.ClothingItemStore, 'getStateFromStore')],

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
          <h1>List of Everything ({this.state.clothingItems.length})</h1>
          <App.ClothingItemTableGroup
            clothingItems={this.state.clothingItems}
            groupBy={this.state.groupBy}
            handleSort={this.handleSort}
          />
        </div>
      );
    }
  });
})();
