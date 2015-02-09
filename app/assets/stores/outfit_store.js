//= require stores/backbone_store_factory
//= require collections/outfit_collection

App.OutfitStore = (function () {
  'use strict';

  var OutfitStoreFactory = App.BackboneStoreFactory.extend({
    collection: App.OutfitCollection
  });

  return new OutfitStoreFactory();
})();
