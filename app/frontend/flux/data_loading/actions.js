//= require ./index
//= require dispatcher
//= require flux/clothing_item/actions
//= require flux/purpose/actions
//= require flux/purchase/actions
//= require brand/flux/actions
//= require flux/clothing_item/store
//= require flux/purpose/store
//= require flux/purchase/store
//= require brand/flux/store

App.DataLoading.Actions = (function () {
  'use strict';

  var REGISTERED_MODELS = [
    'ClothingItem', 'Purpose', 'Brand', 'Purchase'
  ];

  function _loadingListener() {
    if (REGISTERED_MODELS.some(_isStoreLoading)) {
      return;
    }

    App.Dispatcher.trigger('DataLoading.Store.setLoading', false);

    REGISTERED_MODELS.forEach(_removeLoadingListenerFromStore);
  }

  function _isStoreLoading(model) {
    return App[model].Store.getAll().isLoading;
  }

  function _removeLoadingListenerFromStore(model) {
    App[model].Store.removeChangeListener(_loadingListener);
  }

  function _addLoadingListenerToStore(model) {
    App[model].Store.addChangeListener(_loadingListener);
  }

  function _fetchAll(model) {
    App[model].Actions.fetchAll();
  }

  return {
    fetchAll: function () {
      REGISTERED_MODELS.forEach(_fetchAll);

      App.Dispatcher.trigger('DataLoading.Store.setLoading', true);

      REGISTERED_MODELS.forEach(_addLoadingListenerToStore);
    }
  };
})();
