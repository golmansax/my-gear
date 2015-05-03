//= require ./index
//= require ./collection
//= require ./view_model

App.ClothingItem.Store = (function () {
  'use strict';

  var ClothingItemStoreFactory = FluxCrudStore.Store.extend({
    collection: App.ClothingItem.Collection,
    viewModel: App.ClothingItem.ViewModel
  });

  return new ClothingItemStoreFactory();
})();
