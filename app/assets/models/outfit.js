App.Outfit = (function () {
  'use strict';

  return Backbone.Model.extend({
    urlRoot: function () {
      return '/outfits';
    }
  });
})();
