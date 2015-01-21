//= require support/third_party_for_specs
//= require support/prop_types
//= require support/test_utils
//= require support/mock_react_router
//= require support/magic_lamp
/* global window*/

App = {};

expect = window.chai.expect;

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
