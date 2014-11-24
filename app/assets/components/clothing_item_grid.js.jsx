define([
  'bower/react', 'bower/underscore', 'components/clothing_item_view',
  'bower/react_bootstrap'
], function (React, _, ClothingItemView, ReactBootstrap) {

  'use strict';

  return React.createClass({
    renderGridItem: function (clothingItem) {
      return (
        <ReactBootstrap.Col sm={4} key={clothingItem.id}>
          <ClothingItemView {...clothingItem} />
        </ReactBootstrap.Col>
      );
    },
    render: function () {
      return (
        <ReactBootstrap.Row>
          {_(this.props.clothingItems).map(this.renderGridItem)}
        </ReactBootstrap.Row>
      );
    }
  });
});
