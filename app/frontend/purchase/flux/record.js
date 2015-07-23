App.Purchase.Record = (function () {
  'use strict';

  var PurchaseRecord = Immutable.Record({
    id: null,
    clothingItemId: null,
    version: '',
    date: null,
    purposeIds: []
  });

  PurchaseRecord.prototype.moment = function () {
    return moment(this.get('date'));
  };

  PurchaseRecord.prototype.formattedDate = function () {
    return this.moment().format('MMM ’YY');
  };

  PurchaseRecord.prototype.group = function () {
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
  };

  return PurchaseRecord;
})();
