//= require stores/backbone_store_factory
//= require collections/outfit_collection

App.OutfitStore = (function () {
  'use strict';

  var PurchaseStoreFactory = App.BackboneStoreFactory.extend({
    collection: App.OutfitCollection
  });

  return new PurchaseStoreFactory();
})();
