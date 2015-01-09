//= require bower_components/chai/chai
//= require support/sinon
//= require support/sinon-chai
//= require require
//= require support/phantomjs_shims
//= require magic_lamp

(function () {
  'use strict';

  /* global window */
  window.expect = window.chai.expect;

  beforeEach(function () {
    this.sandbox = sinon.sandbox.create();
    this.sandbox.stub(window.console, 'warn', function (message) {
      throw message;
    });
  });

  afterEach(function () { this.sandbox.restore(); });

  require.config({
    waitSeconds: 20
    map: {
      'routes': {
        'components/clothing_item_detailed_view': 'support/mock_react_class',
        'components/clothing_item_grid': 'support/mock_react_class',
        'components/clothing_item_view': 'support/mock_react_class'
      }
    }
  });
})();
