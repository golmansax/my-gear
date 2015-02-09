//= require stores/backbone_store_factory
//= require collections/clothing_item_collection

App.ClothingItemStore = (function () {
  'use strict';

  var PurchaseStoreFactory = App.BackboneStoreFactory.extend({
    collection: App.ClothingItemCollection
  });

  return new PurchaseStoreFactory();
})();
