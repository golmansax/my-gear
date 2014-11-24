define([
  'routes', 'support/test_utils', 'support/mock_react_class',
  'bower/react'
], function (routes, TestUtils, MockReactClass, React) {
  'use strict';

  describe('routes', function () {
    it('renders properly', function () {
      TestUtils.renderIntoDocument(routes);
    });
  });
});
