//= require models/purchase/view_model
//= require components/purpose/label_list
//= require stores/clothing_item_store

App.PurchaseTableRow = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      purchase: React.PropTypes.instanceOf(App.Purchase.ViewModel)
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
          <td>
            <App.Purpose.LabelList ids={this.props.purchase.purposeIds} />
          </td>
          <td>{this.props.purchase.version}</td>
        </tr>
      );
    }
  });
})();
