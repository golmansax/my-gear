//= require ./index
//= require ./model

App.Purchase.Collection = (function () {
  'use strict';

  return Backbone.Collection.extend({
    model: App.Purchase.Model,
    url: '/purchases'
  });
})();
