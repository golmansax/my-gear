var ReactRouter = (function () {
  'use strict';

  return {
    Route: TestUtils.MockClass,
    DefaultRoute: TestUtils.MockClass,
    Link: TestUtils.MockClass,
    RouteHandler: TestUtils.MockClass,
    State: {
      getParams: function () {},
      getQuery: function () {},
      isActive: function () {}
    }
  };
})();
