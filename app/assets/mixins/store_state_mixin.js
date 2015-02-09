App.StoreStateMixin = (function () {
  'use strict';

  return {
    updateStateFromStore: function () {
      this.setState(this._getStateForAttrs(_(this.stateFromStores).keys()));
    },

    getInitialState: function () {
      return this._getStateForAttrs(_(this.stateFromStores).keys());
    },

    componentDidMount: function () {
      _(this.stateFromStores).each(this._addChangeListener);
    },

    componentWillUnmount: function () {
      _(this.stateFromStores).each(this._removeChangeListener);
    },

    _addChangeListener: function (getter, attr) {
      if (this._changeListeners[getter.Store]) {
        return;
      }

      var changeListener = this._onStoreChange.bind(this, getter.Store);
      this._changeListeners[getter.Store] = changeListener;
      getter.Store.addChangeListener(this._changeListeners[getter.Store]);
    },

    _removeChangeListener: function (getter, attr) {
      if (!this._changeListeners[getter.Store]) {
        return;
      }

      getter.Store.removeChangeListener(this._changeListeners[getter.Store]);
      this._changeListeners[getter.Store] = null;
    },

    _changeListeners: {},

    _onStoreChange: function (Store) {
      var filteredAttrs = _.chain(this.stateFromStores)
        .keys()
        .filter(this._isAssociatedWithStore.bind(this, Store))
        .value();

      this.setState(this._getStateForAttrs(filteredAttrs));
    },

    _isAssociatedWithStore: function (Store, attr) {
      return this.stateFromStores[attr].Store === Store;
    },

    _getStateForAttrs: function (attrs) {
      var values = _(attrs).map(this._getValue);
      return _(attrs).object(values);
    },

    _getValue: function (attr) {
      var getter = this.stateFromStores[attr];
      return getter.get(this.state, this.props);
    }
  };
})();
