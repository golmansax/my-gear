//= require ./index
//= require ./attributes

App.Brand.Model = (function () {
  'use strict';

  return Backbone.Model.extend({
    defaults: App.Brand.Attributes,

    urlRoot: function () {
      return '/brands';
    }
  });
})();
