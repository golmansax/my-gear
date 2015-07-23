//= require ./constants

App.Brand.Actions = (function () {
  'use strict';

  return new FluxCrud.Actions({
    dispatcher: App.Dispatcher,
    constants: App.Brand.Constants
  });
})();
