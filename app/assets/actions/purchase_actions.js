//= require stores/purchase_store

App.PurchaseActions = (function () {
  'use strict';

  return FluxCrudStore.Actions.boundTo(App.PurchaseStore);
})();
