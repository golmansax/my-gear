//= require components/clothing_item_table_group
//= require collections/clothing_item_collection
//= require getters/clothing_item_getters
//= require mixins/store_state_mixin

App.ListRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreStateMixin],

    stateFromStore: {
      clothingItems: App.ClothingItemGetters.GET_ALL
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
