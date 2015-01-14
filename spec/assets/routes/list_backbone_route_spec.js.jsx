define([
  'routes/list_backbone_route', 'support/test_utils', 'bower/react',
  'routes/list_route', 'collections/clothing_item_collection',
  'routes/backbone_route'
], function (ListBackboneRoute, TestUtils, React,
             ListRoute, ClothingItemCollection,
             BackboneRoute) {

  'use strict';

  describe('routes/list_backbone_route', function () {
    beforeEach(function () {
      this.clothingItemBackboneRoute = TestUtils.renderIntoDocument(
        <ListBackboneRoute />
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
      expect(this.backboneRoute.props.routeClass).to.equal(ListRoute);
    });
  });
});
