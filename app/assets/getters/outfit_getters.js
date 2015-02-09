//= require ./getters_factory
//= require stores/outfit_store

App.OutfitGetters = (function () {
  'use strict';

  var OutfitGettersFactory = App.GettersFactory.extend({
    Store: App.OutfitStore
  });

  return new OutfitGettersFactory();
})();
