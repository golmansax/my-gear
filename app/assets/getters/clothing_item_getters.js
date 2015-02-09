//= require ./getters_factory
//= require stores/clothing_item_store

App.ClothingItemGetters = (function () {
  'use strict';

  var ClothingItemGettersFactory = App.GettersFactory.extend({
    Store: App.ClothingItemStore
  });

  return new ClothingItemGettersFactory();
})();
