//= require collections/clothing_item_collection

App.ClothingItemStore = (function () {
  'use strict';

  var EVENTS = 'add remove change reset sort';
  var prototypeGet = App.ClothingItemCollection.prototype.get;

  return new (App.ClothingItemCollection.extend({
    _fetchedAll: false,

    getAll: function () {
      if (!this._fetchedAll) {
        this.fetch({ reset: true });
        this._fetchedAll = true;
      }

      return this.toJSON();
    },

    getOne: function (id) {
      var model = this.get(id);
      if (!model) {
        model = this.create({ id: id });
        model.fetch();
      }
      return model.toJSON();
    },

    addChangeListener: function (callback) {
      this.on(EVENTS, callback);
    },

    removeChangeListener: function (callback) {
      this.off(EVENTS, callback);
    }
  }))();
})();
