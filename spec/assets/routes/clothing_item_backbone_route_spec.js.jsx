define([
  'routes/clothing_item_backbone_route', 'support/test_utils', 'bower/react',
  'routes/clothing_item_route', 'models/clothing_item', 'routes/backbone_route'
], function (ClothingItemBackboneRoute, TestUtils, React,
             ClothingItemRoute, ClothingItem, BackboneRoute) {

  'use strict';

  describe('routes/clothing_item_backbone_route', function () {
    beforeEach(function () {
      var clothingItemBackboneRoute = TestUtils.renderIntoDocument(
        <ClothingItemBackboneRoute />
      );
      this.backboneRoute = TestUtils.findRenderedComponentWithType(
        clothingItemBackboneRoute,
        BackboneRoute
      );
    });

    it('renders a BackboneRoute with the proper model', function () {
      expect(this.backboneRoute.props.modelClass).to.equal(ClothingItem);
    });

    it('renders a BackboneRoute with the proper React class', function () {
      expect(this.backboneRoute.props.routeClass).to.equal(ClothingItemRoute);
    });
  });
});
