define(['bower/reqwest'], function (reqwest) {
  'use strict';

  return new (function jQueryFake() {
    this.ajax = reqwest.compat;
    return this;
  })();
});
