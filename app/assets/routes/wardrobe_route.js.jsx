//= require components/clothing_item_grid

App.WardrobeRoute = (function () {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    render: function () {
      var clothingItems = this.getCollection().map(function (clothingItem) {
        return clothingItem.attributes;
      });

      return (
        <div>
          WARDROBE MANAGER
          <App.ClothingItemGrid clothingItems={clothingItems} />
        </div>
      );
    }
  });
})();
