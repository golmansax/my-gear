//= require models/outfit/collection
//= require models/outfit/view_model

App.OutfitStore = (function () {
  'use strict';

  var OutfitStoreFactory = FluxCrudStore.Store.extend({
    collection: App.Outfit.Collection,
    viewModel: App.Outfit.ViewModel
  });

  return new OutfitStoreFactory();
})();
