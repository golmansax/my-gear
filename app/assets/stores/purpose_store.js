//= require models/purpose/collection
//= require models/purpose/view_model

App.PurposeStore = (function () {
  'use strict';

  var PurposeStoreFactory = FluxCrudStore.Store.extend({
    collection: App.Purpose.Collection,
    viewModel: App.Purpose.ViewModel
  });

  return new PurposeStoreFactory();
})();
