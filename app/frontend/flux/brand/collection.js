//= require ./index
//= require ./model

App.Brand.Collection = (function () {
  'use strict';

  return Backbone.Collection.extend({
    model: App.Brand.Model,
    url: '/brands'
  });
})();
