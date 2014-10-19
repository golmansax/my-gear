define([
  'bower/backbone', 'models/clothing_item'
], function (Backbone, ClothingItem) {
  'use strict';

  return Backbone.Collection.extend({
    model: ClothingItem,
    url: '/clothing_items'
  });
});
