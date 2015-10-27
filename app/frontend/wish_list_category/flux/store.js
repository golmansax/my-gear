//= require ./constants

App.WishListCategory.Store = (function () {
  'use strict';

  return new FluxCrud.Store({
    defaultAttrs: {
      id: null,
      name: '',
      clothingItemIds: [],
    },

    dispatcher: App.Dispatcher,

    constants: App.WishListCategory.Constants
  });
})();
