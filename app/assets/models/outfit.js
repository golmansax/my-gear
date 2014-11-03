define(['bower/backbone'], function (Backbone) {
  'use strict';

  return Backbone.Model.extend({
    url: function () {
      return 'outfits/' + (this.id || '');
    }
  });
});
