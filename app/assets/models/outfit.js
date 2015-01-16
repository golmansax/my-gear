App.Outfit = (function () {
  'use strict';

  return Backbone.Model.extend({
    url: function () {
      return '/outfits/' + this.get('id') + '.json';
    }
  });
})();
