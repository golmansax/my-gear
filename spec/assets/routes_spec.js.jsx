//= require routes

describe('routes', function () {
  'use strict';

  beforeEach(function () {
    this.sandbox.useFakeServer();
  });

  it('renders properly', function () {
    TestUtils.renderIntoDocument(App.routes);
  });
});
