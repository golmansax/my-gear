define([
  'bower/react', 'collections/clothing_item_list', 'components/wardrobe'
], function (React, ClothingItemList, Wardrobe) {
  'use strict';

  var clothingItems = new ClothingItemList();

  return React.createClass({
    render: function () {
      return React.DOM.div(null,
        'WRAPPER',
        Wardrobe({ collection: clothingItems })
      );
    }
  });
});
