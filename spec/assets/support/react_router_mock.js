define(['support/mock_react_class'], function (MockReactClass) {
  'use strict';

  return {
    Route: MockReactClass,
    DefaultRoute: MockReactClass,
    Link: MockReactClass,
    RouteHandler: MockReactClass,
    State: {
      getParams: function () {},
      getQuery: function () {},
      isActive: function () {}
    }
  };
});
