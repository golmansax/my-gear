App.Purchase = (function () {
  'use strict';

  return Backbone.Model.extend({
    urlRoot: function () {
      return '/purchases';
    }
  });
})();
