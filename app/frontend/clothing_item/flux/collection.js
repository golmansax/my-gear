//= require ./model

App.ClothingItem.Collection = (function () {
  'use strict';

  return Backbone.SortableCollection.extend({
    model: App.ClothingItem.Model,
    url: '/clothing_items'
  });
})();
