//= require routes/outfit_backbone_route

describe('routes/outfit_backbone_route', function () {
  'use strict';

  beforeEach(function () {
    var outfitBackboneRoute = TestUtils.renderIntoDocument(
      <App.OutfitBackboneRoute />
    );
    this.backboneRoute = TestUtils.findRenderedComponentWithType(
      outfitBackboneRoute,
      App.BackboneRoute
    );
  });

  it('renders a BackboneRoute with the proper model', function () {
    expect(this.backboneRoute.props.modelClass).to.equal(Outfit);
  });

  it('renders a BackboneRoute with the proper React class', function () {
    expect(this.backboneRoute.props.routeClass).to.equal(OutfitRoute);
  });
});
