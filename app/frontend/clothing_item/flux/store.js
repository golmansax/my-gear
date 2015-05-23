//= require ./collection
//= require ./view_model

App.ClothingItem.Store = (function () {
  'use strict';

  return FluxCrudStore.Store.extend({
    collection: App.ClothingItem.Collection,
    viewModel: App.ClothingItem.ViewModel
  }).instance();
})();
