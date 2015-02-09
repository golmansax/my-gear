//= require ./getters_factory
//= require stores/purchase_store

App.PurchaseGetters = (function () {
  'use strict';

  var PurchaseGettersFactory = App.GettersFactory.extend({
    Store: App.PurchaseStore
  });

  return new PurchaseGettersFactory();
})();
