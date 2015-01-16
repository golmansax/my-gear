//= require components/clothing_item_view

App.ClothingItemGrid = (function () {

  'use strict';

  return React.createClass({
    renderGridItem: function (clothingItem) {
      return (
        <ReactBootstrap.Col sm={4} key={clothingItem.id}>
          <App.ClothingItemView {...clothingItem} />
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
})();
