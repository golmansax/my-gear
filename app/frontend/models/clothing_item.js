define(['bower/backbone'], function (Backbone) {
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      brand: '',
      model: '',
      firstPurchaseDate: null,
      recentPurchaseDate: null
    },
    url: function () {
      return this.id ? 'clothing_item/' + this.id : '/clothing_items';
    }
  });
});
