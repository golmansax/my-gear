//= require dispatcher
//= require actions/clothing_item_actions
//= require actions/purpose_actions
//= require actions/purchase_actions
//= require flux/clothing_item/store
//= require flux/purpose/store
//= require flux/purchase/store

App.DataLoadingActions = (function () {
  'use strict';

  function _blah() {
    if (App.ClothingItemStore.getAll().isLoading ||
        App.PurposeStore.getAll().isLoading ||
        App.PurchaseStore.getAll().isLoading) {
      return;
    }

    App.ClothingItemStore.removeChangeListener(_blah);
    App.PurposeStore.removeChangeListener(_blah);
    App.PurchaseStore.removeChangeListener(_blah);

    App.Dispatcher.trigger('DataLoadingStore.setLoading', false);
  }

  return {
    fetchAll: function () {
      App.ClothingItemActions.fetchAll();
      App.PurposeActions.fetchAll();
      App.PurchaseActions.fetchAll();

      App.Dispatcher.trigger('DataLoadingStore.setLoading', true);

      App.ClothingItemStore.addChangeListener(_blah);
      App.PurposeStore.addChangeListener(_blah);
      App.PurchaseStore.addChangeListener(_blah);
    }
  };
})();
