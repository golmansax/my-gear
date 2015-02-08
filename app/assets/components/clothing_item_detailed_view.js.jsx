//= require components/purchase_list/purchase_list
//= require models/clothing_item

App.ClothingItemDetailedView = (function () {
  'use strict';

  return React.createClass({
    propTypes: App.ClothingItem.propTypes,
    render: function () {
      var imageAttrs = {
        className: 'img-responsive',
        src: this.props.imagePath
      };

      return (
        <ReactBootstrap.Row>
          <ReactBootstrap.Col sm={6}>
            <img {...imageAttrs} />
          </ReactBootstrap.Col>
          <ReactBootstrap.Col sm={6}>
            <h1>{this.props.name}</h1>
            <App.PurchaseList ids={this.props.purchaseIds} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      );
    }
  });
})();
