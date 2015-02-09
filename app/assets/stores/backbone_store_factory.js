App.BackboneStoreFactory = (function () {
  'use strict';

  var BackboneStoreFactory = function () {
    this.initialize();
  };
  BackboneStoreFactory.extend = Backbone.Collection.extend;

  var EVENTS = 'add remove change reset sort';

  _(BackboneStoreFactory.prototype).extend({
    collection: Backbone.Collection,

    _storage: null,

    _fetchedModels: {},

    _fetchedAll: false,

    initialize: function () {
      this._storage = new this.collection();
    },

    preload: function (models) {
      this._storage.reset(models);
    },

    getAll: function (options) {
      options = options || {};

      if (!this._fetchedAll) {
        this._storage.fetch({ reset: true });
        this._fetchedAll = true;
      }

      if (options.pluck) {
        return this._storage.pluck(options.pluck);
      }

      return this._storage.toJSON();
    },

    _add: function (model) {
      this._storage.add(model, { merge: true, silent: true });
    },

    get: function (id) {
      var model = this._storage.get(id);

      if (!_(this._fetchedModels).has(id)) {
        model = model || new this._storage.model({ id: id });
        model.fetch({ success: this._add.bind(this) });
        this._storage.add(model, { merge: true, silent: true });
        this._fetchedModels[id] = true;
      } else if (!model) {
        return null;
      }

      return model.toJSON();
    },

    addChangeListener: function (callback) {
      this._storage.on(EVENTS, callback);
    },

    removeChangeListener: function (callback) {
      this._storage.off(EVENTS, callback);
    }
  });

  return BackboneStoreFactory;
})();
