//= require models/clothing_item_collection
//= require models/clothing_item_view_model

App.ClothingItemStore = (function () {
  'use strict';

  var ClothingItemStoreFactory = FluxCrudStore.Store.extend({
    collection: App.ClothingItemCollection,
    viewModel: App.ClothingItemViewModel
  });

  return new ClothingItemStoreFactory();
})();
