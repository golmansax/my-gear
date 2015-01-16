App.ClothingItem = (function () {
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
      return '/clothing_items/' + this.get('id') + '.json';
    }
  }, {
    propTypes: {
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      firstPurchaseDate: PropTypes.moment.isRequired
    }
  });
})();
