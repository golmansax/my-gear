App.ClothingItemViewModel = (function () {
  'use strict';

  var ClothingItemViewModel = Immutable.Record({
    brand: '',
    model: '',
    type: '',
    imagePath: '',
    purchaseIds: [],
    purposeIds: [],
    id: null
  });

  _(ClothingItemViewModel.prototype).extend({
    name: function () {
      return this.brand + ' ' + this.model;
    }
  });

  return ClothingItemViewModel;
})();
