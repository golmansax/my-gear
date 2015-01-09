define([
  'routes/wardrobe_backbone_route', 'support/test_utils', 'bower/react',
  'routes/wardrobe_route', 'collections/clothing_item_collection',
  'routes/backbone_route'
], function (WardrobeBackboneRoute, TestUtils, React,
             WardrobeRoute, ClothingItemCollection,
             BackboneRoute) {

  'use strict';

  describe('routes/wardrobe_backbone_route', function () {
    beforeEach(function () {
      this.clothingItemBackboneRoute = TestUtils.renderIntoDocument(
        <WardrobeBackboneRoute />
      );
      this.backboneRoute = TestUtils.findRenderedComponentWithType(
        this.clothingItemBackboneRoute,
        BackboneRoute
      );
    });

    it('renders a BackboneRoute with the proper collection', function () {
      var collectionClass = this.backboneRoute.props.collectionClass;
      expect(collectionClass).to.equal(ClothingItemCollection);
    });

    it('renders a BackboneRoute with the proper React class', function () {
      expect(this.backboneRoute.props.routeClass).to.equal(WardrobeRoute);
    });
  });
});
