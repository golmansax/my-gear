define([
  'bower/backbone', 'models/outfit'
], function (Backbone, Outfit) {
  'use strict';

  return Backbone.Collection.extend({ model: Outfit, url: '/outfits' });
});
