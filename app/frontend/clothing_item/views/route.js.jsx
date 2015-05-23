//= require ../flux/store
//
//= require brand/flux/store
//= require purchase/views/list

App.ClothingItem.Route = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.ClothingItem.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        clothingItem: App.ClothingItem.Store.get(props.id)
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
