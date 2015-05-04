//= require ./index
//= require ./store

App.Purpose.Actions = (function () {
  'use strict';

  return FluxCrudStore.Actions.boundTo(App.Purpose.Store);
})();
