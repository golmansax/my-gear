//= require ./index
//= require ./store

App.ClothingItem.Actions = (function () {
  'use strict';

  return FluxCrudStore.Actions.boundTo(App.ClothingItem.Store);
})();
