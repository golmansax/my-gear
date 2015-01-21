var TestUtils = (function (OldTestUtils) {
  'use strict';

  return _(OldTestUtils).extend({
    MockClass: React.createClass({
      render: function () {
        return React.DOM.div(null, this.props.children);
      }
    })
  });
})(React.addons.TestUtils);
