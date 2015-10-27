//= require ./constants

App.WishListCategory.Actions = (function () {
  'use strict';

  return new FluxCrud.Actions({
    dispatcher: App.Dispatcher,
    constants: App.WishListCategory.Constants
  });
})();
