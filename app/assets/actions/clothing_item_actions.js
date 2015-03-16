//= require stores/clothing_item_store

App.ClothingItemActions = (function () {
  'use strict';

  return FluxCrudStore.Actions.boundTo(App.ClothingItemStore);
})();
