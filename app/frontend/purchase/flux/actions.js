//= require ./store

App.Purchase.Actions = (function () {
  'use strict';

  return FluxCrudStore.Actions.boundTo(App.Purchase.Store);
})();
