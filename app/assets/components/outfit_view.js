define([
  'bower/react', 'bower/react_router', 'bower/underscore',
  'models/clothing_item'
], function (React, Router, _, ClothingItem) {
  'use strict';

  return React.createClass({
    renderClothingItems: function (clothingItems) {
      return _(clothingItems).map(function (clothingItem) {
        var linkAttrs = {
          to: 'clothing_item',
          params: { id: clothingItem.id }
        };

        return React.DOM.div({ key: clothingItem.id },
          Router.Link(linkAttrs,
            clothingItem.name
          )
        );
      });
    },
    render: function () {
      var clothingItems = _(this.props.clothingItems).map(function (attrs) {
        return new ClothingItem(attrs, { parse: true }).attributes;
      });

      return React.DOM.div(null,
        this.props.name,
        this.renderClothingItems(clothingItems)
      );
    }
  });
});
