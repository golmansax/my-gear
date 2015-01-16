//= require routes/backbone_route
//= require routes/wardrobe_route
//= require collections/clothing_item_collection

App.WardrobeBackboneRoute = (function () {
  'use strict';

  return React.createClass({
    render: function () {
      var routeAttrs = {
        routeClass: App.WardrobeRoute,
        collectionClass: App.ClothingItemCollection
      };

      return <App.BackboneRoute {...routeAttrs} />;
    }
  });
})();
