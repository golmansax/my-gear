//= require ./index
//= require dispatcher

App.DataLoading.Store = (function () {
  'use strict';

  var BACKBONE_EVENTS = 'change';
  var _storage = new Backbone.Model({
    defaults: { isLoading: false }
  });

  App.Dispatcher.on('DataLoading.Store.setLoading', function (value) {
    _storage.set('isLoading', value);
  });

  return {
    addChangeListener: function (callback) {
      _storage.on(BACKBONE_EVENTS, callback);
    },

    removeChangeListener: function (callback) {
      _storage.off(BACKBONE_EVENTS, callback);
    },

    isLoading: function () {
      return _storage.get('isLoading');
    }
  };
})();
