// require bower_components/reqwest/reqwest

Backbone.$ = (function () {
  'use strict';

  return new JQueryMock();

  function JQueryMock() {
    this.ajax = function () { };//reqwest.compat;
    return this;
  }
})();
