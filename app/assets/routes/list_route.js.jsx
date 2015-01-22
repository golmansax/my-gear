//= require components/clothing_item_table_group

App.ListRoute = (function () {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    getInitialState: function () {
      return {
        currentSort: this.getCollection().defaultSort,
        groupBy: 'usage'
      };
    },
    handleSort: function (sort) {
      if (this.state.currentSort === sort) {
        this.getCollection().reverseSort();
      } else {
        this.getCollection().changeSort([sort]);
        this.setState({ currentSort: sort });
      }
    },
    render: function () {
      var clothingItems = this.getCollection().toJSON();

      return (
        <div>
          <h1>List of Everything</h1>
          <App.ClothingItemTableGroup clothingItems={clothingItems}
            groupBy={this.state.groupBy} handleSort={this.handleSort} />
        </div>
      );
    }
  });
})();
