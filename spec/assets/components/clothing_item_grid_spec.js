define([
  'support/test_utils', 'components/clothing_item_grid',
  'models/clothing_item', 'components/clothing_item_view'
], function (TestUtils, ClothingItemGrid, ClothingItem, ClothingItemView) {
  'use strict';

  describe('components/clothing_item_grid', function () {
    var clothingItem;

    beforeEach(function () {
      this.fixtures = fixture.load('clothing_item.json');
      clothingItem = new ClothingItem(fixture.json[0], { parse: true });
    });

    it('renders a ClothingItemView for each clothingItem', function () {
      var grid = TestUtils.renderIntoDocument(
        ClothingItemGrid({ clothingItems: [clothingItem.attributes] })
      );

      var clothingItemViews = TestUtils.scryRenderedComponentsWithType(
        grid,
        ClothingItemView
      );
      expect(clothingItemViews).to.have.length(1);
    });
  });
});
