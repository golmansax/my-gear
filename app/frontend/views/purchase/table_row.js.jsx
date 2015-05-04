//= require ./index
//= require flux/purchase/view_model
//= require views/purpose/label_list
//= require flux/clothing_item/store

App.Purchase.TableRow = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Purchase.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.number.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purchase: App.Purchase.Store.get(props.id)
      };
    },

    render: function () {
      var clothingItemId = this.state.purchase.clothingItemId;
      var clothingItem = App.ClothingItem.Store.get(clothingItemId);

      return (
        <tr>
          <td>
            <ReactRouter.Link
              to='clothing-item'
              params={{ id: clothingItemId }}
              >
              {clothingItem.name()}
            </ReactRouter.Link>
          </td>
          <td>{clothingItem.type}</td>
          <td>
            <App.Purpose.LabelList ids={this.state.purchase.purposeIds} />
          </td>
          <td>{this.state.purchase.version}</td>
          <td>{this.state.purchase.formattedDate()}</td>
        </tr>
      );
    }
  });
})();
