define([
  'routes/wardrobe_route', 'support/test_utils', 'components/clothing_item_grid'
], function (WardrobeRoute, TestUtils, ClothingItemGrid) {
  'use strict';

  describe('routes/wardrobe_route', function () {
    beforeEach(function () {
      this.collectionMock = [{ attributes: { hello: 'kitty' } }];
      this.collectionMock.fetch = sinon.stub();
      this.collectionMock.on = function () {};

      this.wardrobeRoute = TestUtils.renderIntoDocument(
        WardrobeRoute({ collection: this.collectionMock })
      );
    });

    it('fetches the collection', function () {
      expect(this.collectionMock.fetch.called).to.be.true();
    });

    it('renders a ClothingItemGrid with the collections', function () {
      var grid = TestUtils.findRenderedComponentWithType(
        this.wardrobeRoute,
        ClothingItemGrid
      );

      expect(grid.props.clothingItems).to.deep.equal([{ hello: 'kitty' }]);
    });
  });
});
