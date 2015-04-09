//= require ./index
//= require ./model

App.Purpose.Collection = (function () {
  'use strict';

  return Backbone.Collection.extend({
    model: App.Purpose.Model,
    url: '/purposes'
  });
})();
