//= require ./index
//= require dispatcher
//= require flux/clothing_item/actions
//= require flux/purpose/actions
//= require flux/purchase/actions
//= require flux/brand/actions
//= require flux/clothing_item/store
//= require flux/purpose/store
//= require flux/purchase/store
//= require flux/brand/store

App.DataLoading.Actions = (function () {
  'use strict';

  function _blah() {
    if (App.ClothingItem.Store.getAll().isLoading ||
        App.Purpose.Store.getAll().isLoading ||
        App.Brand.Store.getAll().isLoading ||
        App.Purchase.Store.getAll().isLoading) {
      return;
    }

    App.ClothingItem.Store.removeChangeListener(_blah);
    App.Purpose.Store.removeChangeListener(_blah);
    App.Purchase.Store.removeChangeListener(_blah);
    App.Brand.Store.removeChangeListener(_blah);

    App.Dispatcher.trigger('DataLoading.Store.setLoading', false);
  }

  return {
    fetchAll: function () {
      App.ClothingItem.Actions.fetchAll();
      App.Purpose.Actions.fetchAll();
      App.Purchase.Actions.fetchAll();
      App.Brand.Actions.fetchAll();

      App.Dispatcher.trigger('DataLoading.Store.setLoading', true);

      App.ClothingItem.Store.addChangeListener(_blah);
      App.Purpose.Store.addChangeListener(_blah);
      App.Purchase.Store.addChangeListener(_blah);
      App.Brand.Store.addChangeListener(_blah);
    }
  };
})();
