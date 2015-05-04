//= require ./index
//= require ./attributes

App.Purpose.Model = (function () {
  'use strict';

  return Backbone.Model.extend({
    defaults: App.Purpose.Attributes,

    urlRoot: function () {
      return '/purposes';
    }
  });
})();
