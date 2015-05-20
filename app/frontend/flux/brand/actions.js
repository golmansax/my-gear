//= require ./index
//= require ./store

App.Brand.Actions = (function () {
  'use strict';

  return FluxCrudStore.Actions.boundTo(App.Brand.Store);
})();
