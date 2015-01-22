App.ClothingItem = (function () {
  'use strict';

  return Backbone.Model.extend({
    parse: function (data) {
      return _(data).extend({
        firstPurchaseDate: moment(data.firstPurchaseDate)
      });
    },
    mutators: {
      name: function () {
        var brand = this.get('brand');
        var model = this.get('model');

        return (brand && model) ? (brand + ' ' + model) : null;
      }
    },
    validate: function () {
      if (!this.get('name')) {
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
