//= require stores/backbone_store_factory
//= require collections/purchase_collection

App.PurchaseStore = (function () {
  'use strict';

  var PurchaseStoreFactory = App.BackboneStoreFactory.extend({
    collection: App.PurchaseCollection
  });

  return new PurchaseStoreFactory();
})();
