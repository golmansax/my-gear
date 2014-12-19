define([
  'routes/outfit_backbone_route', 'support/test_utils', 'bower/react',
  'routes/outfit_route', 'models/outfit', 'routes/backbone_route'
], function (OutfitBackboneRoute, TestUtils, React,
             OutfitRoute, Outfit, BackboneRoute) {

  'use strict';

  describe('routes/outfit_backbone_route', function () {
    beforeEach(function () {
      var outfitBackboneRoute = TestUtils.renderIntoDocument(
        <OutfitBackboneRoute />
      );
      this.backboneRoute = TestUtils.findRenderedComponentWithType(
        outfitBackboneRoute,
        BackboneRoute
      );
    });

    it('renders a BackboneRoute with the proper model', function () {
      expect(this.backboneRoute.props.modelClass).to.equal(Outfit);
    });

    it('renders a BackboneRoute with the proper React class', function () {
      expect(this.backboneRoute.props.routeClass).to.equal(OutfitRoute);
    });
  });
});
