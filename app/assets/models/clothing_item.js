define(['bower/backbone'], function (Backbone) {
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      id: null,
      brand: '',
      model: '',
      firstPurchaseDate: null,
      recentPurchaseDate: null
    },
    url: function () {
      return this.id ? 'clothing_items/' + this.id : '/clothing_items';
    }
  });
});
