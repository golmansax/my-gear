define(['bower/backbone'], function (Backbone) {
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      id: null,
      name: ''
    },
    url: function () {
      return 'outfits/' + (this.id || '');
    }
  });
});
