define([
  'bower/react', 'bower/react_router', 'bower/underscore'
], function (React, Router, _) {
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
            clothingItem.brand + ' ' + clothingItem.model
          )
        );
      });
    },
    render: function () {
      return React.DOM.div(null,
        this.props.name,
        this.renderClothingItems(this.props.clothingItems)
      );
    }
  });
});
