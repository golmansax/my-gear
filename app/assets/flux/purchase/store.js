//= require ./index
//= require ./collection
//= require ./view_model

App.Purchase.Store = (function () {
  'use strict';

  var PurchaseStoreFactory = FluxCrudStore.Store.extend({
    collection: App.Purchase.Collection,
    viewModel: App.Purchase.ViewModel
  });

  return new PurchaseStoreFactory();
})();
