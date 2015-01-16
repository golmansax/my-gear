//= require models/clothing_item

App.OutfitView = (function () {
  'use strict';

  return React.createClass({
    renderClothingItems: function (clothingItems) {
      return _(clothingItems).map(function (clothingItem) {
        var linkAttrs = {
          to: 'clothing_item',
          params: { id: clothingItem.id }
        };

        return (
          <div key={clothingItem.id}>
            <ReactRouter.Link {...linkAttrs}>
              {clothingItem.name}
            </ReactRouter.Link>
          </div>
        );
      });
    },
    render: function () {
      var clothingItems = _(this.props.clothingItems).map(function (attrs) {
        return new App.ClothingItem(attrs, { parse: true }).attributes;
      });

      return (
        <div>
          {this.props.name}
          {this.renderClothingItems(clothingItems)}
        </div>
      );
    }
  });
})();
