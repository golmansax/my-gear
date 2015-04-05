//= require models/purchase_view_model
//= require stores/clothing_item_store

App.PurchaseTableRow = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      purchase: React.PropTypes.instanceOf(App.PurchaseViewModel)
    },

    render: function () {
      var clothingItemId = this.props.purchase.clothingItemId;
      var clothingItem = App.ClothingItemStore.get(clothingItemId);

      return (
        <tr>
          <td>
            <ReactRouter.Link
              to='clothing_item'
              params={{ id: clothingItemId }}
              >
              {clothingItem.name()}
            </ReactRouter.Link>
          </td>
          <td>{clothingItem.type}</td>
          <td>{clothingItem.usage}</td>
        </tr>
      );
    }
  });
})();
