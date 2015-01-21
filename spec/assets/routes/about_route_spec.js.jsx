//= require routes/about_route

describe('routes/about_route', function () {
  'use strict';

  it('renders a BackboneRoute with the proper model', function () {
    TestUtils.renderIntoDocument(<App.AboutRoute />);
  });
});
