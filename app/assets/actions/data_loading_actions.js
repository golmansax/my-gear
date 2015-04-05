//= require dispatcher
//= require actions/clothing_item_actions
//= require actions/outfit_actions
//= require actions/purchase_actions
//= require stores/clothing_item_store
//= require stores/outfit_store
//= require stores/purchase_store

App.DataLoadingActions = (function () {
  'use strict';

  function _blah() {
    if (App.ClothingItemStore.getAll().isLoading ||
        App.OutfitStore.getAll().isLoading ||
        App.PurchaseStore.getAll().isLoading) {
      return;
    }

    App.ClothingItemStore.removeChangeListener(_blah);
    App.OutfitStore.removeChangeListener(_blah);
    App.PurchaseStore.removeChangeListener(_blah);

    App.Dispatcher.trigger('DataLoadingStore.setLoading', false);
  }

  return {
    fetchAll: function () {
      App.ClothingItemActions.fetchAll();
      App.OutfitActions.fetchAll();
      App.PurchaseActions.fetchAll();

      App.Dispatcher.trigger('DataLoadingStore.setLoading', true);

      App.ClothingItemStore.addChangeListener(_blah);
      App.OutfitStore.addChangeListener(_blah);
      App.PurchaseStore.addChangeListener(_blah);
    }
  };
})();
