//= require ./constants

App.Brand.Store = (function () {
  'use strict';

  return new FluxCrud.Store({
    defaultAttrs: {
      id: null,
      name: '',
      purchaseIds: []
    },

    dispatcher: App.Dispatcher,

    constants: App.Brand.Constants
  });
})();
