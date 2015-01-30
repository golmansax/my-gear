//= require components/clothing_item_table_group
//= require collections/clothing_item_collection

App.ListRoute = (function () {
  'use strict';

  return React.createBackboneClass({
    mixins: [ReactRouter.State],

    componentDidMount: function () {
      this.state.clothingItems.fetch();
    },

    componentWillMount: function () {
      this.state.clothingItems.on('all', this.forceUpdate.bind(this, null));
    },

    getInitialState: function () {
      var data = this.props.data.clothingItems || [];
      var clothingItems = new App.ClothingItemCollection(data, { parse: true });

      return {
        currentSort: clothingItems.defaultSort,
        groupBy: 'usage',
        clothingItems: clothingItems
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
          <h1>List of Everything</h1>
          <App.ClothingItemTableGroup
            clothingItems={this.state.clothingItems.toJSON()}
            groupBy={this.state.groupBy}
            handleSort={this.handleSort}
          />
        </div>
      );
    }
  });
})();
