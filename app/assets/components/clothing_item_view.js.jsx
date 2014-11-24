define([
  'bower/react', 'bower/react_router', 'models/clothing_item'
], function (React, Router, ClothingItem) {
  'use strict';

  return React.createClass({
    propTypes: ClothingItem.propTypes,
    render: function () {
      var imageAttrs = {
        className: 'img-responsive',
        src: this.props.imagePath
      };

      return (
        <div>
          <Router.Link to='clothing_item' params={{ id: this.props.id }}>
            {this.props.name}
          </Router.Link>
          <img {...imageAttrs} />
        </div>
      );
    }
  });
});
