//= require dispatcher

App.DataLoading.Store = (function () {
  'use strict';

  var _isLoading = false;
  var _listeners = [];

  App.Dispatcher.register(function (action) {
    if (action.actionType === 'DataLoading.Store.setLoading') {
      if (_isLoading !== action.value) {
        _isLoading = action.value;
        _emitChange();
      }
    }
  });

  function _emitChange() {
    _listeners.forEach(function (listener) {
      listener();
    });
  }

  return {
    addChangeListener: function (listener) {
      _listeners.push(listener);
    },

    removeChangeListener: function (myListener) {
      _listeners = _listeners.filter(function (listener) {
        return listener !== myListener;
      });
    },

    isLoading: function () {
      return _isLoading;
    }
  };
})();
