//= require stores/backbone_store_factory
//= require collections/clothing_item_collection

App.ClothingItemStore = new App.BackboneStoreFactory(
  App.ClothingItemCollection
);
