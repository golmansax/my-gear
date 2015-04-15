//= require stores/purchase_store
//= require stores/clothing_item_store

App.PurchaseGridItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.PurchaseStore, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.number.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purchase: App.PurchaseStore.get(props.id)
      };
    },

    render: function () {
      var clothingItemId = this.state.purchase.clothingItemId;
      var clothingItem = App.ClothingItemStore.get(clothingItemId);

      return (
        <div>
          <ReactRouter.Link to='clothing_item' params={{ id: clothingItemId }}>
            {clothingItem.name()}
          </ReactRouter.Link>
          <img className='img-responsive' src={clothingItem.imagePath} />
        </div>
      );
    }
  });
})();
