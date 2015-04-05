//= require models/purchase/collection
//= require models/purchase/view_model

App.PurchaseStore = (function () {
  'use strict';

  var PurchaseStoreFactory = FluxCrudStore.Store.extend({
    collection: App.Purchase.Collection,
    viewModel: App.Purchase.ViewModel
  });

  return new PurchaseStoreFactory();
})();
