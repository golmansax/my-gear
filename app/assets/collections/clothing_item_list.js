define(['backbone', 'clothing_item'], function (Backbone, ClothingItem) {
  'use strict';

  var ClothingItemList = Backbone.Collection.extend({
    model: ClothingItem,
    url: '/clothing_items'
  });

  return ClothingItemList;
});
