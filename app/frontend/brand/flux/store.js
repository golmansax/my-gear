//= require ../index
//= require ./collection
//= require ./view_model

App.Brand.Store = (function () {
  'use strict';

  return FluxCrudStore.Store.extend({
    collection: App.Brand.Collection,
    viewModel: App.Brand.ViewModel
  }).instance();
})();
