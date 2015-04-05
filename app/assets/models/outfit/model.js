//= require ./index
//= require ./attributes

App.Outfit.Model = (function () {
  'use strict';

  return Backbone.Model.extend({
    defaults: App.Outfit.Attributes,

    parse: function (data) {
      return data.outfit || data;
    },

    urlRoot: function () {
      return '/outfits';
    }
  });
})();
