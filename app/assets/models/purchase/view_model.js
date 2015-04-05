//= require ./index
//= require ./attributes

App.Purchase.ViewModel = (function () {
  'use strict';

  var PurchaseViewModel = Immutable.Record(App.Purchase.Attributes);

  return PurchaseViewModel;
})();
