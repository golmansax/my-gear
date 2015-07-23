//= require ./constants

App.Purpose.Store = (function () {
  'use strict';

  return new FluxCrud.Store({
    defaultAttrs: {
      id: null,
      name: '',
      purchaseIds: []
    },

    dispatcher: App.Dispatcher,

    constants: App.Purpose.Constants
  });
})();
