//= require models/clothing_item

App.ClothingItemView = (function () {
  'use strict';

  return React.createClass({
    propTypes: App.ClothingItem.propTypes,
    render: function () {
      var imageAttrs = {
        className: 'img-responsive',
        src: this.props.imagePath
      };

      return (
        <div>
          <ReactRouter.Link to='clothing_item' params={{ id: this.props.id }}>
            {this.props.name}
          </ReactRouter.Link>
          <img {...imageAttrs} />
        </div>
      );
    }
  });
})();
