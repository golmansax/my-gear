define([
  'routes/root_route', 'support/test_utils', 'components/header'
], function (RootRoute, TestUtils, Header) {
  'use strict';

  describe('routes/root_route', function () {
    beforeEach(function () {
      this.rootRoute = TestUtils.renderIntoDocument(
        RootRoute({ activeRouteHandler: function () { } })
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
