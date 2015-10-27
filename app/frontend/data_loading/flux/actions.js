//= require dispatcher
//= require graph_ql
//= require clothing_item/flux/actions
//= require purpose/flux/actions
//= require purchase/flux/actions
//= require brand/flux/actions
//= require wish_list_category/flux/actions
//= require clothing_item/flux/store
//= require purpose/flux/store
//= require purchase/flux/store
//= require brand/flux/store
//= require wish_list_category/flux/store

App.DataLoading.Actions = (function () {
  'use strict';

  function _loadModels(Model, collectionData) {
    collectionData.forEach(function (modelData) {
      var key = modelData.id;
      App[Model].Actions.create(key, modelData);
    });
  }

  function _fetchAllThroughGraphQl() {
    App.GraphQl.query([
      'query {',
      '  clothingItems {',
      '    id,',
      '    type,',
      '    model,',
      '    imagePath,',
      '    brandId,',
      '    purchaseIds,',
      '  }',
      '  brands {',
      '    id,',
      '    name,',
      '    purchaseIds,',
      '  }',
      '  purchases {',
      '    id,',
      '    clothingItemId,',
      '    purposeIds,',
      '    date,',
      '    version,',
      '  }',
      '  purposes {',
      '    id,',
      '    name,',
      '    purchaseIds,',
      '  }',
      '  wishListCategories {',
      '    id,',
      '    name,',
      '    clothingItemIds,',
      '  }',
      '}'
    ].join('')).then(function (result) {
      _loadModels('Brand', result.data.brands);
      _loadModels('ClothingItem', result.data.clothingItems);
      _loadModels('Purchase', result.data.purchases);
      _loadModels('Purpose', result.data.purposes);
      _loadModels('WishListCategory', result.data.wishListCategories);

      App.Dispatcher.dispatch({
        actionType: 'DataLoading.Store.setLoading',
        value: false
      });
    });
  }

  return {
    fetchAll: function () {
      _fetchAllThroughGraphQl();

      App.Dispatcher.dispatch({
        actionType: 'DataLoading.Store.setLoading',
        value: true
      });
    }
  };
})();
