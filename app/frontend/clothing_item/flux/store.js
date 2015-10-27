//= require ./constants

App.ClothingItem.Store = (function () {
  'use strict';

  return new FluxCrud.Store({
    defaultAttrs: {
      brandId: null,
      model: '',
      type: '',
      imagePath: '',
      purchaseIds: [],
      id: null
    },

    dispatcher: App.Dispatcher,

    constants: App.ClothingItem.Constants
  });
})();
