App.ClothingItem = (function () {
  'use strict';

  return Backbone.Model.extend({
    parse: function (data) {
      var clothingItem = data.clothingItem || data;

      return _(clothingItem).extend({
        firstPurchaseDate: moment(clothingItem.firstPurchaseDate)
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
    urlRoot: function () {
      return '/clothing_items';
    }
  }, {
    propTypes: {
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      firstPurchaseDate: PropTypes.moment.isRequired
    }
  });
})();
