define(['bower/backbone'], function (Backbone) {
  'use strict';

  return Backbone.Model.extend({
    urlRoot: function () {
      return '/outfits/';
    }
  });
});
