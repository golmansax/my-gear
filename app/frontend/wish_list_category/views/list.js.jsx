//= require ../flux/store

App.WishListCategory.List = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.WishListCategory.Store, 'getStateFromStore')
    ],

    getStateFromStore: function (props) {
      return {
        clothingItem: App.ClothingItem.Store.getAll()
      };
    },

    render: function () {
      var brand = App.Brand.Store.get(this.state.clothingItem.brandId);
      var imageAttrs = {
        className: 'img-responsive',
        src: this.state.clothingItem.imagePath
      };

      return (
        <ReactBootstrap.Row>
          <ReactBootstrap.Col sm={6}>
            <img {...imageAttrs} />
          </ReactBootstrap.Col>
          <ReactBootstrap.Col sm={6}>
            <h1>
              {brand.name}
              {this.state.clothingItem.model}
            </h1>
            <App.Purchase.List ids={this.state.clothingItem.purchaseIds} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      );
    }
  });
})();
