App.PurchaseViewModel = (function () {
  'use strict';

  var PurchaseViewModel = Immutable.Record({
    id: null,
    clothingItemId: null,
    usage: '',
    version: '',
    date: null
  });

  return PurchaseViewModel;
})();
