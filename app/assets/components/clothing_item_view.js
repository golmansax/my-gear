define(['bower/react', 'bower/react_router'], function (React, Router) {
  'use strict';

  return React.createClass({
    render: function () {
      var imageAttrs = {
        className: 'img-responsive',
        src: this.props.imagePath
      };

      return React.DOM.div(null,
        Router.Link({ to: 'clothing_item', params: { id: this.props.id }},
          this.props.brand + ' ' + this.props.model
        ),
        React.DOM.img(imageAttrs)
      );
    }
  });
});
