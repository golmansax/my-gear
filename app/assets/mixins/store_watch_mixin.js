App.StoreWatchMixin = function (Store, onChangeAttr) {
  'use strict';

  return {
    componentDidMount: function() {
      Store.addChangeListener(this[onChangeAttr]);
    },

    componentWillUnmount: function() {
      Store.removeChangeListener(this[onChangeAttr]);
    }
  };
};
