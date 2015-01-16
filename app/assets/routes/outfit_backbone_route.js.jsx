//= require routes/backbone_route
//= require routes/outfit_route
//= require models/outfit

App.OutfitBackboneRoute = (function () {
  'use strict';

  return React.createClass({
    render: function () {
      var routeAttrs = {
        routeClass: App.OutfitRoute,
        modelClass: App.Outfit
      };

      return <App.BackboneRoute {...routeAttrs} />;
    }
  });
})();
