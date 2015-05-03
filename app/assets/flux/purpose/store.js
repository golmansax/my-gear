//= require ./index
//= require /collection
//= require /view_model

App.Purpose.Store = (function () {
  'use strict';

  var PurposeStoreFactory = FluxCrudStore.Store.extend({
    collection: App.Purpose.Collection,
    viewModel: App.Purpose.ViewModel
  });

  return new PurposeStoreFactory();
})();
