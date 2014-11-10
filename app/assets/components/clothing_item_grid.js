define([
  'bower/react', 'bower/underscore', 'components/clothing_item_view'
], function (React, _, ClothingItemView) {

  'use strict';

  return React.createFactory(React.createClass({
    renderGridItem: function (clothingItem) {
      return React.DOM.div({ key: clothingItem.id, className: 'col-sm-4' },
        ClothingItemView(clothingItem)
      );
    },
    render: function () {
      return React.DOM.div({ className: 'row' },
        _(this.props.clothingItems).map(this.renderGridItem)
      );
    }
  }));
});
