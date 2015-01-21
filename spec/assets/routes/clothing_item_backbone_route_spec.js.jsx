//= require routes/clothing_item_backbone_route

describe('routes/clothing_item_backbone_route', function () {
  'use strict';

  beforeEach(function () {
    var clothingItemBackboneRoute = TestUtils.renderIntoDocument(
      <App.ClothingItemBackboneRoute />
    );
    this.backboneRoute = TestUtils.findRenderedComponentWithType(
      clothingItemBackboneRoute,
      App.BackboneRoute
    );
  });

  it('renders a BackboneRoute with the proper model', function () {
    expect(this.backboneRoute.props.modelClass).to.equal(App.ClothingItem);
  });

  it('renders a BackboneRoute with the proper React class', function () {
    expect(this.backboneRoute.props.routeClass).to.equal(App.ClothingItemRoute);
  });
});
