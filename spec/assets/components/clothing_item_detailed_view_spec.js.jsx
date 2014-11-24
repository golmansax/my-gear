define([
  'support/test_utils', 'components/clothing_item_detailed_view',
  'models/clothing_item', 'support/magic_lamp', 'bower/react'
], function (TestUtils, ClothingItemDetailedView,
             ClothingItem, MagicLamp, React) {

  'use strict';

  describe('components/clothing_item_detailed_view', function () {
    var clothingItem;

    beforeEach(function () {
      var fixture = MagicLamp.json('clothing_items/show');
      clothingItem = new ClothingItem(fixture, { parse: true });
    });

    it('renders', function () {
      TestUtils.renderIntoDocument(
        <ClothingItemDetailedView {...clothingItem.attributes} />
      );
    });
  });
});
