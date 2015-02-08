//= require routes/root_route

describe('routes/root_route', function () {
  'use strict';

  beforeEach(function () {
    this.rootRoute = TestUtils.renderIntoDocument(<App.RootRoute />);
  });

  it('renders a header', function () {
    expect(TestUtils.findRenderedComponentWithType(
      this.rootRoute,
      App.Header
    )).to.be.ok();
  });
});
