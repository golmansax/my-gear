TestUtils = (function (OldTestUtils) {
  'use strict';

  return _(OldTestUtils).extend({
    MockComponent: React.createClass({
      render: function () {
        return React.DOM.div(null, this.props.children);
      }
    }),
    MockModel: function (data) {
      var noop = function () {};

      return {
        fetch: noop,
        isValid: noop,
        on: noop,
        toJSON: function () { return data; }
      };
    },
    MockCollection: function (data) {
      var noop = function () {};

      return {
        fetch: noop,
        isValid: noop,
        on: noop,
        toJSON: function () { return data; }
      };
    }
  });
})(React.addons.TestUtils);
