//= require support/bower
//= require support/expect
//= require support/magic_lamp
/* global App */

var App = {};

(function () {
  'use strict';

  MagicLamp.preload();

  beforeEach(function () {
    this.sandbox = sinon.sandbox.create();
    this.sandbox.stub(window.console, 'warn', function (message) {
      throw message;
    });
  });

  afterEach(function () {
    MagicLamp.clean();
    this.sandbox.restore();
  });
})();
