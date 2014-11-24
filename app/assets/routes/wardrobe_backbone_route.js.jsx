define([
  'bower/react', 'routes/backbone_route', 'routes/wardrobe_route',
  'collections/clothing_item_list'
], function (React, BackboneRoute, WardrobeRoute, ClothingItemList) {
  'use strict';

  return React.createClass({
    render: function () {
      var routeAttrs = {
        routeClass: WardrobeRoute,
        collectionClass: ClothingItemList
      };

      return <BackboneRoute {...routeAttrs} />;
    }
  });
});
