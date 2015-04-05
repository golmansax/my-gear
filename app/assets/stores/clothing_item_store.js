//= require models/clothing_item/collection
//= require models/clothing_item/view_model

App.ClothingItemStore = (function () {
  'use strict';

  var ClothingItemStoreFactory = FluxCrudStore.Store.extend({
    collection: App.ClothingItem.Collection,
    viewModel: App.ClothingItem.ViewModel
  });

  return new ClothingItemStoreFactory();
})();
