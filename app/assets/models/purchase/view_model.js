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
    },

    group: function () {
      var purposeIds = this.get('purposeIds');
      if (purposeIds.length === 0) {
        return 'not-in-use';
      }

      var group = 'specialized';
      this.get('purposeIds').forEach(function (purposeId) {
        if (purposeId === 'essential' || purposeId === 'backup') {
          group = purposeId;
          return false;
        }
      });

      return group;
    }
  });

  return PurchaseViewModel;
})();
