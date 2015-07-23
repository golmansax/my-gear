//= require ./constants

App.Purpose.Actions = (function () {
  'use strict';

  return new FluxCrud.Actions({
    dispatcher: App.Dispatcher,
    constants: App.Purpose.Constants
  });
})();
