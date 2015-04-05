//= require ./index
//= require ./attributes

App.Purchase.Model = (function () {
  'use strict';

  return Backbone.Model.extend({
    defaults: App.Purchase.Attributes,

    urlRoot: function () {
      return '/purchases';
    }
  });
})();
