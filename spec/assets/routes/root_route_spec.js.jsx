define([
  'routes/root_route', 'support/test_utils', 'components/header', 'bower/react'
], function (RootRoute, TestUtils, Header, React) {
  'use strict';

  describe('routes/root_route', function () {
    beforeEach(function () {
      this.rootRoute = TestUtils.renderIntoDocument(
        <RootRoute activeRouteHandler={this.sandbox.stub()} />
      );
    });

    it('adds an outfit list to the state', function () {
      expect(this.rootRoute.state.outfits).to.exist();
    });

    it('renders a header', function () {
      expect(TestUtils.findRenderedComponentWithType(
        this.rootRoute,
        Header
      )).to.be.ok();
    });
  });
});
