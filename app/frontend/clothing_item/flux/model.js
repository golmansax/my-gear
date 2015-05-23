//= require ../index
//= require ./attributes

App.ClothingItem.Model = (function () {
  'use strict';

  return Backbone.Model.extend({
    defaults: App.ClothingItem.Attributes,

    validate: function () {
      if (!this.get('brand') && !this.get('model')) {
        return 'Data has not been loaded yet';
      }
    },

    urlRoot: function () {
      return '/clothing_items';
    }
  });
})();
