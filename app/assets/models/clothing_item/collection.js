//= require ./index
//= require ./model

App.ClothingItem.Collection = (function () {
  'use strict';

  var USAGE_ORDER = ['heavy', 'moderate', 'specialized'];

  return Backbone.SortableCollection.extend({
    model: App.ClothingItem.Model,
    url: '/clothing_items'
  });
})();
