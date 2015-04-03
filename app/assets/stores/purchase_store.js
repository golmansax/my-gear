//= require models/purchase_collection
//= require models/purchase_view_model

App.PurchaseStore = (function () {
  'use strict';

  var PurchaseStoreFactory = FluxCrudStore.Store.extend({
    collection: App.PurchaseCollection,
    viewModel: App.PurchaseViewModel
  });

  return new PurchaseStoreFactory();
})();
