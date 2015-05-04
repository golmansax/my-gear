//= require ./index
//= require flux/purchase/store
//= require flux/clothing_item/store

App.Purchase.GridItem = (function () {
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
        <div>
          <ReactRouter.Link to='clothing-item' params={{ id: clothingItemId }}>
            {clothingItem.name()}
          </ReactRouter.Link>
          <img className='img-responsive' src={clothingItem.imagePath} />
        </div>
      );
    }
  });
})();
