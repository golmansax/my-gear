//= require models/outfit

App.PurchaseCollection = (function () {
  'use strict';

  return Backbone.Collection.extend({
    model: App.Purchase,
    url: '/purchases'
  });
})();
