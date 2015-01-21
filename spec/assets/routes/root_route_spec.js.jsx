//= require routes/root_route

describe('routes/root_route', function () {
  'use strict';

  beforeEach(function () {
    this.rootRoute = TestUtils.renderIntoDocument(
      <App.RootRoute activeRouteHandler={this.sandbox.stub()} />
    );
  });

  it('adds an outfit collection to the state', function () {
    expect(this.rootRoute.state.outfits).to.exist();
  });

  it('renders a header', function () {
    expect(TestUtils.findRenderedComponentWithType(
      this.rootRoute,
      App.Header
    )).to.be.ok();
  });
});
