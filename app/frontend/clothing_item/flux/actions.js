//= require ./constants

App.ClothingItem.Actions = (function () {
  'use strict';

  return new FluxCrud.Actions({
    dispatcher: App.Dispatcher,
    constants: App.ClothingItem.Constants
  });
})();
