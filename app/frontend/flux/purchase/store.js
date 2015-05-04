//= require ./index
//= require ./collection
//= require ./view_model

App.Purchase.Store = (function () {
  'use strict';

  return FluxCrudStore.Store.extend({
    collection: App.Purchase.Collection,
    viewModel: App.Purchase.ViewModel
  }).instance();
})();
