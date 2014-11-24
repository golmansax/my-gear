define([
  'bower/react', 'routes/backbone_route', 'routes/outfit_route', 'models/outfit'
], function (React, BackboneRoute, OutfitRoute, Outfit) {
  'use strict';

  return React.createClass({
    render: function () {
      var routeAttrs = {
        routeClass: OutfitRoute,
        modelClass: Outfit
      };

      return <BackboneRoute {...routeAttrs} />;
    }
  });
});
