//= require ./getter

App.GettersFactory = (function () {
  'use strict';

  var GettersFactory = function () {
    this.initialize();
  };
  GettersFactory.extend = Backbone.Collection.extend;

  _(GettersFactory.prototype).extend({
    Store: null,

    initialize: function () {
      _(this.getters).each(this._createGetter.bind(this));
    },

    _createGetter: function (getter, attr) {
      this[attr] = new App.Getter({ Store: this.Store, get: getter });
    },

    getters: {
      GET_ALL: function () {
        return this.Store.getAll();
      },

      GET_ALL_IDS: function () {
        return this.Store.getAll({ pluck: 'id' });
      },

      FIND_BY_ID: function (state, props) {
        return this.Store.get(props.id);
      },
    }
  });

  return GettersFactory;
})();
