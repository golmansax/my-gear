//= require ./collection
//= require ./view_model

App.Purpose.Store = (function () {
  'use strict';

  return FluxCrudStore.Store.extend({
    collection: App.Purpose.Collection,
    viewModel: App.Purpose.ViewModel
  }).instance();
})();
