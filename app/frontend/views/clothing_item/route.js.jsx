//= require flux/clothing_item/store
//= require views/purchase/list

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
      var imageAttrs = {
        className: 'img-responsive',
        src: this.props.clothingItem.imagePath
      };

      return (
        <ReactBootstrap.Row>
          <ReactBootstrap.Col sm={6}>
            <img {...imageAttrs} />
          </ReactBootstrap.Col>
          <ReactBootstrap.Col sm={6}>
            <h1>{this.props.clothingItem.name()}</h1>
            <App.Purchase.List ids={this.props.clothingItem.purchaseIds} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      );
    }
  });
})();
