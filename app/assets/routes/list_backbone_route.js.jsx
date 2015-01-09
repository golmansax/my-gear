define([
  'bower/react', 'routes/backbone_route', 'routes/list_route',
  'collections/clothing_item_collection'
], function (React, BackboneRoute, ListRoute, ClothingItemCollection) {
  'use strict';

  return React.createClass({
    render: function () {
      var routeAttrs = {
        routeClass: ListRoute,
        collectionClass: ClothingItemCollection
      };

      return <BackboneRoute {...routeAttrs} />;
    }
  });
});
