define([
  'bower/react', 'components/clothing_item_grid'
], function (React, ClothingItemGrid) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    render: function () {
      var clothingItems = this.getCollection().map(function (clothingItem) {
        return clothingItem.attributes;
      });

      return React.DOM.div(null,
        'WARDROBE MANAGER',
        new ClothingItemGrid({ clothingItems: clothingItems })
      );
    }
  });
});
