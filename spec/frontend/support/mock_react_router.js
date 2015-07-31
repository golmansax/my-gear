ReactRouter = (function () {
  'use strict';

  return {
    Route: TestUtils.MockComponent,
    DefaultRoute: TestUtils.MockComponent,
    Link: TestUtils.MockComponent,
    RouteHandler: TestUtils.MockComponent,
    State: {
      getParams: sinon.spy(),
      getQuery: sinon.spy(),
      isActive: sinon.spy()
    }
  };
})();
