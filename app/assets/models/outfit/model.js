//= require ./index
//= require ./attributes

App.Outfit.Model = (function () {
  'use strict';

  return Backbone.Model.extend({
    defaults: App.Outfit.Attributes,

    urlRoot: function () {
      return '/purposes';
    }
  });
})();
