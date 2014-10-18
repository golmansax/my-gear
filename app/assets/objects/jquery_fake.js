define(['bower/reqwest'], function (reqwest) {
  'use strict';

  return new JQueryFake();

  function JQueryFake() {
    this.ajax = reqwest.compat;
    return this;
  }
});
