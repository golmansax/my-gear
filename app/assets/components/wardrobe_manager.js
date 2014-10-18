define([
  'bower/react', 'collections/clothing_item_list', 'components/wardrobe'
], function (React, ClothingItemList, Wardrobe) {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      return { clothingItems: new ClothingItemList() };
    },
    render: function () {
      return React.DOM.div(null,
        'WARDROBE MANAGER',
        Wardrobe({ collection: this.state.clothingItems })
      );
    }
  });
});
