define([
  'bower/backbone', 'bower/moment', 'bower/underscore'
], function (Backbone, moment, _) {
  'use strict';

  return Backbone.Model.extend({
    parse: function (data) {
      return _(data).extend({
        name: data.brand + ' ' + data.model,
        firstPurchaseDate: moment(data.firstPurchaseDate)
      });
    },
    validate: function (attrs) {
      if (!attrs.name) {
        return 'Data has not been loaded yet';
      }
    },
    url: function () {
      return 'clothing_items/' + (this.id || '');
    }
  });
});
