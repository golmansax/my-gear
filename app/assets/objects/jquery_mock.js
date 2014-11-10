define(['bower/reqwest'], function (reqwest) {
  'use strict';

  return new JQueryMock();

  function JQueryMock() {
    this.ajax = reqwest.compat;
    return this;
  }
});
