//= require routes/backbone_route
//= require routes/list_route
//= require collections/clothing_item_collection

App.ListBackboneRoute = (function () {
  'use strict';

  return React.createClass({
    render: function () {
      var routeAttrs = {
        routeClass: App.ListRoute,
        collectionClass: App.ClothingItemCollection
      };

      return <App.BackboneRoute {...routeAttrs} />;
    }
  });
})();
