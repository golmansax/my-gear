App.ClothingItem = (function () {
  'use strict';

  return Backbone.Model.extend({
    validate: function () {
      if (!this.get('brand') && !this.get('model')) {
        return 'Data has not been loaded yet';
      }
    },

    urlRoot: function () {
      return '/clothing_items';
    }
  }, {
    propTypes: {
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }
  });
})();
