define([
  'bower/react', 'bower/react_router', 'collections/outfit_list',
  'components/header'
], function (React, Router, OutfitList, Header) {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      return { outfits: new OutfitList() };
    },
    render: function () {
      return React.DOM.div(null,
        new Header({ collection: this.state.outfits }),
        React.DOM.div({ className: 'container' },
          'I AM THE APP: ',
          this.props.activeRouteHandler()
        )
      );
    }
  });
});
