define([
  'routes/about_route', 'support/test_utils', 'bower/react'
], function (AboutRoute, TestUtils, React) {
  'use strict';

  describe('routes/about_route', function () {
    it('renders a BackboneRoute with the proper model', function () {
      TestUtils.renderIntoDocument(
        <AboutRoute />
      );
    });
  });
});
