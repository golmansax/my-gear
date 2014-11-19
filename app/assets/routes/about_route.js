define(['bower/react'], function (React) {
  'use strict';

  return React.createFactory(React.createClass({
    render: function () {
      return React.DOM.h1(null,
        'About'
      );
    }
  }));
});
