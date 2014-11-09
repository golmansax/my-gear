define(['bower/react', 'models/clothing_item'], function (React, ClothingItem) {
  'use strict';

  return React.createClass({
    propTypes: ClothingItem.propTypes,
    render: function () {
      var imageAttrs = {
        className: 'img-responsive',
        src: this.props.imagePath
      };

      return React.DOM.div({ className: 'row' },
        React.DOM.div({ className: 'col-sm-6' },
          React.DOM.img(imageAttrs)
        ),
        React.DOM.div({ className: 'col-sm-6' },
          React.DOM.h1(null, this.props.name),
          React.DOM.h4(null,
            React.DOM.strong(null, 'First purchase date: '),
            this.props.firstPurchaseDate.format('MMMM YYYY')
          )
        )
      );
    }
  });
});
