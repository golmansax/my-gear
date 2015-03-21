App.Purchase = (function () {
  'use strict';

  return Backbone.Model.extend({
    parse: function (data) {
      var purchase = data.purchase || data;
      return purchase;
    },

    urlRoot: function () {
      return '/purchases';
    }
  });
})();
