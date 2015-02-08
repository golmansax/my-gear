App.Purchase = (function () {
  'use strict';

  return Backbone.Model.extend({
    parse: function (data) {
      var purchase = data.purchase || data;
      return _.extend(purchase, { date: moment(purchase.date) });
    },

    urlRoot: function () {
      return '/purchases';
    }
  });
})();
