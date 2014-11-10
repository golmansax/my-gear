define(['bower/react'], function (React) {
  'use strict';

  return React.createFactory(React.createClass({
    render: function () {
      return React.DOM.div(null, this.props.children);
    }
  }));
});
