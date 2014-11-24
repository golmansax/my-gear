define([
  'routes', 'support/test_utils'
], function (routes, TestUtils) {
  'use strict';

  describe('routes', function () {
    it('renders properly', function () {
      TestUtils.renderIntoDocument(routes);
    });
  });
});
