App.BackboneStoreFactory = function (Collection) {
  'use strict';

  var EVENTS = 'add remove change reset sort';

  var _storage = new Collection();
  var _fetchedAll = false;

  return _(this).extend({
    getAll: function () {
      if (!_fetchedAll) {
        _storage.fetch({ reset: true });
        _fetchedAll = true;
      }

      return _storage.toJSON();
    },

    getOne: function (id) {
      var model = _storage.get(id);
      if (!model) {
        model = _storage.create({ id: id });
        model.fetch();
      }
      return model.toJSON();
    },

    addChangeListener: function (callback) {
      _storage.on(EVENTS, callback);
    },

    removeChangeListener: function (callback) {
      _storage.off(EVENTS, callback);
    }
  });
};
