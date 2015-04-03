//= require models/outfit_collection
//= require models/outfit_view_model

App.OutfitStore = (function () {
  'use strict';

  var OutfitStoreFactory = FluxCrudStore.Store.extend({
    collection: App.OutfitCollection,
    viewModel: App.OutfitViewModel
  });

  return new OutfitStoreFactory();
})();
