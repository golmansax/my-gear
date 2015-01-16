//= require routes/backbone_route
//= require routes/clothing_item_route
//= require models/clothing_item

App.ClothingItemBackboneRoute = (function () {
  'use strict';

  return React.createClass({
    render: function () {
      var routeAttrs = {
        routeClass: App.ClothingItemRoute,
        modelClass: App.ClothingItem
      };

      return <App.BackboneRoute {...routeAttrs} />;
    }
  });
})();
