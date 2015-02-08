App.Outfit = (function () {
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      clothingItemIds: []
    },

    parse: function (data) {
      return data.outfit || data;
    },

    urlRoot: function () {
      return '/outfits';
    }
  });
})();
