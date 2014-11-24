define([
  'bower/react', 'routes/backbone_route', 'routes/clothing_item_route',
  'models/clothing_item'
], function (React, BackboneRoute, ClothingItemRoute, ClothingItem) {
  'use strict';

  return React.createClass({
    render: function () {
      var routeAttrs = {
        routeClass: ClothingItemRoute,
        modelClass: ClothingItem
      };

      return <BackboneRoute {...routeAttrs} />;
    }
  });
});
