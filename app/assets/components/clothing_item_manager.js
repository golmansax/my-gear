define([
  'bower/react', 'models/clothing_item', 'components/clothing_item_view'
], function (React, ClothingItem, ClothingItemView) {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      return {
        clothingItem: new ClothingItem({ id: this.props.params.clothingItemId })
      };
    },
    render: function () {
      return React.DOM.div(null,
        'CLOTHING ITEM',
        new ClothingItemView({ model: this.state.clothingItem })
      );
    }
  });
});
