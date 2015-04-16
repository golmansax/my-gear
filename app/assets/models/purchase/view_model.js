//= require ./index
//= require ./attributes

App.Purchase.ViewModel = (function () {
  'use strict';

  var PurchaseViewModel = Immutable.Record(App.Purchase.Attributes);
  _(PurchaseViewModel.prototype).extend({
    moment: function () {
      return moment(this.get('date'));
    },

    formattedDate: function () {
      return this.moment().format('MMM ’YY');
    }
  });

  return PurchaseViewModel;
})();
