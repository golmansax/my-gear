define([
  'bower/react', 'models/outfit', 'components/outfit_view'
], function (React, Outfit, OutfitView) {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      return {
        outfit: new Outfit({ id: this.props.params.outfitId })
      };
    },
    render: function () {
      return React.DOM.div(null,
        'OUTFIT',
        new OutfitView({ model: this.state.outfit })
      );
    }
  });
});
