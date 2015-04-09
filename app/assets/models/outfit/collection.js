//= require ./index
//= require ./model

App.Outfit.Collection = (function () {
  'use strict';

  return Backbone.Collection.extend({
    model: App.Outfit.Model,
    url: '/purposes'
  });
})();
