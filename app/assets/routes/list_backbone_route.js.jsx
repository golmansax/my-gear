define([
  'bower/react', 'routes/backbone_route', 'routes/list_route',
  'collections/clothing_item_list'
], function (React, BackboneRoute, ListRoute, ClothingItemList) {
  'use strict';

  return React.createClass({
    render: function () {
      var routeAttrs = {
        routeClass: ListRoute,
        collectionClass: ClothingItemList
      };

      return <BackboneRoute {...routeAttrs} />;
    }
  });
});
