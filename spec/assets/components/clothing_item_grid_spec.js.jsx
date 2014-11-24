define([
  'support/test_utils', 'components/clothing_item_grid',
  'models/clothing_item', 'components/clothing_item_view',
  'support/magic_lamp', 'bower/react'
], function (TestUtils, ClothingItemGrid,
             ClothingItem, ClothingItemView,
             MagicLamp, React) {

  'use strict';

  describe('components/clothing_item_grid', function () {
    var clothingItem;

    beforeEach(function () {
      var fixture = MagicLamp.json('clothing_items/show');
      clothingItem = new ClothingItem(fixture, { parse: true });
    });

    it('renders a ClothingItemView for each clothingItem', function () {
      var grid = TestUtils.renderIntoDocument(
        <ClothingItemGrid clothingItems={[clothingItem.attributes]} />
      );

      var clothingItemViews = TestUtils.scryRenderedComponentsWithType(
        grid,
        ClothingItemView
      );
      expect(clothingItemViews).to.have.length(1);
    });
  });
});
