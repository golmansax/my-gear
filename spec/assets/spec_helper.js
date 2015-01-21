//= require support/third_party_for_specs
//= require support/test_utils
//= require support/phantomjs_shims
//= require support/mock_react_router
//= require support/magic_lamp
/* global App, expect, chai */

var App, expect;

(function () {
  'use strict';

  App = {};
  expect = chai.expect;
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
