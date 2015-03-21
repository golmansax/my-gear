TestUtils = (function (OldTestUtils) {
  'use strict';

  return _(OldTestUtils).extend({
    MockComponent: React.createClass({
      render: function () {
        return React.DOM.div(null, this.props.children);
      }
    })
  });
})(React.addons.TestUtils);
