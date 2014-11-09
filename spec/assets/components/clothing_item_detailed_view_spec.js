define([
  'support/test_utils', 'components/clothing_item_detailed_view',
  'models/clothing_item'
], function (TestUtils, ClothingItemDetailedView, ClothingItem) {
  'use strict';

  describe('components/clothing_item_detailed_view', function () {
    var clothingItem;

    beforeEach(function () {
      this.fixtures = fixture.load('clothing_item.json');
      clothingItem = new ClothingItem(fixture.json[0], { parse: true });
    });

    it('renders', function () {
      var detailedView = new ClothingItemDetailedView(clothingItem.attributes);
      TestUtils.renderIntoDocument(detailedView);
    });
  });
});
