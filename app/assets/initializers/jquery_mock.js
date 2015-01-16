//= require bower_components/reqwest/reqwest

var jQuery = (function () {
  'use strict';

  return new JQueryMock();

  function JQueryMock() {
    this.ajax = reqwest.compat;
    return this;
  }
})();
