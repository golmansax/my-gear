//= require stores/purpose_store

App.PurposeActions = (function () {
  'use strict';

  return FluxCrudStore.Actions.boundTo(App.PurposeStore);
})();
