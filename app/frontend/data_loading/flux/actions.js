//= require dispatcher
//= require clothing_item/flux/actions
//= require purpose/flux/actions
//= require purchase/flux/actions
//= require brand/flux/actions
//= require clothing_item/flux/store
//= require purpose/flux/store
//= require purchase/flux/store
//= require brand/flux/store

App.DataLoading.Actions = (function () {
  'use strict';

  var REGISTERED_MODELS = [
    'ClothingItem', 'Purpose', 'Brand', 'Purchase'
  ];

  var _isLoading = {};

  function _loadingListener(model, collectionData) {
    _isLoading[model] = false;

    collectionData.forEach(function (modelData) {
      var key = modelData.id || modelData.slug;
      App[model].Actions.create(key, modelData);
    });

    if (!_areAllLoaded()) { return; }

    App.Dispatcher.dispatch({
      actionType: 'DataLoading.Store.setLoading',
      value: false
    });
  }

  function _areAllLoaded() {
    return REGISTERED_MODELS.every(function (model) {
      return _isLoading[model] === false;
    });
  }

  function _fetchAll(model) {
    _isLoading[model] = true;

    if (model === 'ClothingItem') {
      reqwest({
        url: '/graph_ql',
        method: 'post',
        type: 'json',
        data: {
          query: [
            'query {',
            '  clothingItems {',
            '    id,',
            '    type,',
            '    model,',
            '    imagePath,',
            '    brandId,',
            '    purchaseIds,',
            '  }',
            '}'
          ].join('')
        }
      }).then(function (result) {
        _loadingListener(model, result.data.clothingItems);
      });
    } else {
      reqwest({ url: '/' + model.toLowerCase() + 's', type: 'json' })
          .then(_loadingListener.bind(null, model));
    }
  }

  return {
    fetchAll: function () {
      REGISTERED_MODELS.forEach(_fetchAll);

      App.Dispatcher.dispatch({
        actionType: 'DataLoading.Store.setLoading',
        value: true
      });
    }
  };
})();
