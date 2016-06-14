//= require purpose/views/label_list
//= require clothing_item/flux/store
//= require brand/flux/store

App.Purchase.TableRow = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Purchase.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: React.PropTypes.number.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purchase: App.Purchase.Store.get(props.id)
      };
    },

    render: function () {
      var clothingItemId = this.state.purchase.clothingItemId;
      var clothingItem = App.ClothingItem.Store.get(clothingItemId);
      var brand = App.Brand.Store.get(clothingItem.brandId);

      return (
        <tr>
          <td>
            <ReactRouter.Link to={'/brands/' + clothingItem.brandId}>
              {brand.name}
            </ReactRouter.Link>
          </td>
          <td>
            <ReactRouter.Link to={'/clothing/' + clothingItemId}>
              {clothingItem.model}
            </ReactRouter.Link>
          </td>
          <td>{this.state.purchase.version}</td>
          <td>{clothingItem.type}</td>
          <td>
            <App.Purpose.LabelList ids={this.state.purchase.purposeIds} />
          </td>
          <td>{this.state.purchase.formattedDate()}</td>
        </tr>
      );
    }
  });
})();
