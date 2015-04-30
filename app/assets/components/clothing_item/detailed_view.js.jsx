//= require ./index
//= require components/purchase/list
//= require models/clothing_item/view_model

App.ClothingItem.DetailedView = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      clothingItem: React.PropTypes.instanceOf(App.ClothingItem.ViewModel)
        .isRequired
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
