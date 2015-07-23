//= require ./constants
//= require ./record

App.Purchase.Store = (function () {
  'use strict';

  return new FluxCrud.Store({
    Record: App.Purchase.Record,
    dispatcher: App.Dispatcher,
    constants: App.Purchase.Constants
  });
})();
