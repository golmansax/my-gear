define([
  'bower/react', 'models/clothing_item', 'components/clothing_item_view'
], function (React, ClothingItem, ClothingItemView) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getModel().fetch();
    },
    render: function () {
      return React.DOM.div(null,
        'CLOTHING ITEM',
        new ClothingItemView(this.getModel().attributes)
      );
    }
  });
});
