//= require models/outfit

App.OutfitCollection = (function () {
  'use strict';

  return Backbone.Collection.extend({
    model: App.Outfit,
    url: '/outfits.json'
  });
})();
