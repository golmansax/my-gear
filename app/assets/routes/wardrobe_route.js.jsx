//= require components/clothing_item_grid

App.WardrobeRoute = (function () {
  'use strict';

  return React.createBackboneClass({
    mixins: [ReactRouter.State],

    componentDidMount: function () {
      this.state.clothingItems.fetch();
    },

    componentWillMount: function () {
      this.state.clothingItem.on('change', this.forceUpdate.bind(this, null));
    },

    getInitialState: function () {
      var data = this.props.data.clothingItems || [];

      return {
        clothingItems: new App.ClothingItemCollection(data, { parse: true })
      };
    },

    render: function () {
      return (
        <div>
          WARDROBE MANAGER
          <App.ClothingItemGrid
            clothingItems={this.state.clothingItems.toJSON}
          />
        </div>
      );
    }
  });
})();
