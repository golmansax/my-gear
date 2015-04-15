//= require components/purchase_list/purchase_list
//= require components/purpose_list/purpose_list
//= require models/clothing_item/view_model

App.ClothingItemDetailedView = (function () {
  'use strict';

  return React.createClass({
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
            <App.PurchaseList ids={this.props.clothingItem.purchaseIds} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      );
    }
  });
})();
