App.Outfit = (function () {
  'use strict';

  return Backbone.Model.extend({
    parse: function (data) {
      return data.outfit || data;
    },

    urlRoot: function () {
      return '/outfits';
    }
  });
})();
