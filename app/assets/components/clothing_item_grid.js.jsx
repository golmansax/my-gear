define([
  'bower/react', 'bower/underscore', 'components/clothing_item_view',
  'bower/react_bootstrap'
], function (React, _, ClothingItemView, ReactBootstrap) {

  'use strict';

  return React.createClass({
    renderGridItem: function (clothingItem) {
      return (
        /* jshint maxlen: false, quotmark: false */
        <ReactBootstrap.Col sm={4} key={clothingItem.id}>
          <ClothingItemView {...clothingItem} />
        </ReactBootstrap.Col>
        /* jshint maxlen: 80, quotmark: single */
      );
    },
    render: function () {
      return (
        /* jshint maxlen: false, quotmark: false */
        <ReactBootstrap.Row>
          {_(this.props.clothingItems).map(this.renderGridItem)}
        </ReactBootstrap.Row>
        /* jshint maxlen: 80, quotmark: single */
      );
    }
  });
});
