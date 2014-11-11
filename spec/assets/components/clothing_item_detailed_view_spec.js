define([
  'support/test_utils', 'components/clothing_item_detailed_view',
  'models/clothing_item', 'support/magic_lamp'
], function (TestUtils, ClothingItemDetailedView, ClothingItem, MagicLamp) {
  'use strict';

  describe('components/clothing_item_detailed_view', function () {
    var clothingItem;

    beforeEach(function () {
      var fixture = MagicLamp.json('clothing_items/show');
      clothingItem = new ClothingItem(fixture, { parse: true });
    });

    it('renders', function () {
      var detailedView = new ClothingItemDetailedView(clothingItem.attributes);
      TestUtils.renderIntoDocument(detailedView);
    });
  });
});
