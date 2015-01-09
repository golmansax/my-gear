define([
  'bower/react', 'routes/backbone_route', 'routes/wardrobe_route',
  'collections/clothing_item_collection'
], function (React, BackboneRoute, WardrobeRoute, ClothingItemCollection) {
  'use strict';

  return React.createClass({
    render: function () {
      var routeAttrs = {
        routeClass: WardrobeRoute,
        collectionClass: ClothingItemCollection
      };

      return <BackboneRoute {...routeAttrs} />;
    }
  });
});
