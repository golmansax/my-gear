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

  var globalSandbox;
  beforeEach(function () {
    globalSandbox = sinon.sandbox.create();
    globalSandbox.stub(window.console, 'warn', function (message) {
      throw message;
    });
  });

  afterEach(function () { globalSandbox.restore(); });

  require.config({
    map: {
      'routes': {
        'components/clothing_item_detailed_view': 'support/mock_react_class'
      }
    }
  });
})();
