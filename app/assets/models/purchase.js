App.Purchase = (function () {
  'use strict';

  return Backbone.Model.extend({
    parse: function (data) {
      return data.purchase || data;
    },

    urlRoot: function () {
      return '/purchases';
    }
  });
})();
