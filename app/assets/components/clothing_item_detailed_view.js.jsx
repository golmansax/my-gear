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
            <h4>
              <strong>First purchase date: </strong>
              {this.props.firstPurchaseDate.format('MMMM YYYY')}
            </h4>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      );
    }
  });
})();
