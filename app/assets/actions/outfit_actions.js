//= require stores/outfit_store

App.OutfitActions = (function () {
  'use strict';

  return FluxCrudStore.Actions.boundTo(App.OutfitStore);
})();
