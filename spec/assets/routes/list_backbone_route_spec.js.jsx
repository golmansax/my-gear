//= require routes/list_backbone_route

describe('routes/list_backbone_route', function () {
  'use strict';

  beforeEach(function () {
    this.clothingItemBackboneRoute = TestUtils.renderIntoDocument(
      <App.ListBackboneRoute />
    );
    this.backboneRoute = TestUtils.findRenderedComponentWithType(
      this.clothingItemBackboneRoute,
      App.BackboneRoute
    );
  });

  it('renders a BackboneRoute with the proper collection', function () {
    var collectionClass = this.backboneRoute.props.collectionClass;
    expect(collectionClass).to.equal(App.ClothingItemCollection);
  });

  it('renders a BackboneRoute with the proper React class', function () {
    expect(this.backboneRoute.props.routeClass).to.equal(App.ListRoute);
  });
});
