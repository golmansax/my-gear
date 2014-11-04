define([
  'bower/react', 'models/clothing_item',
  'components/clothing_item_detailed_view'
], function (React, ClothingItem, ClothingItemDetailedView) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getModel().fetch();
    },
    render: function () {
      var model = this.getModel();

      if (model.isValid()) {
        return ClothingItemDetailedView(model.attributes);
      } else {
        return React.DOM.div(null, 'Loading...');
      }
    }
  });
});
