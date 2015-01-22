ReactRouter = (function () {
  'use strict';

  return {
    Route: TestUtils.MockComponent,
    DefaultRoute: TestUtils.MockComponent,
    Link: TestUtils.MockComponent,
    RouteHandler: TestUtils.MockComponent,
    State: {
      getParams: function () {},
      getQuery: function () {},
      isActive: function () {}
    }
  };
})();
