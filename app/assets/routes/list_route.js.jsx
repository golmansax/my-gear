//= require components/clothing_item_table_group
//= require collections/clothing_item_collection
//= require stores/clothing_item_store

App.ListRoute = (function () {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      var clothingItems = new App.ClothingItemCollection([], { parse: true });

      return _(this._getStateFromStore()).extend({
        currentSort: clothingItems.defaultSort,
        groupBy: 'usage'
      });
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
      return { clothingItems: App.ClothingItemStore.getAll() };
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
          <h1>List of Everything</h1>
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
