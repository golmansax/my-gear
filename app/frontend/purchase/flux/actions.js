//= require ./constants

App.Purchase.Actions = (function () {
  'use strict';

  return new FluxCrud.Actions({
    dispatcher: App.Dispatcher,
    constants: App.Purchase.Constants
  });
})();
